import { useRental } from "../../context/RentalContext";
import MapSelector from "../MapSelector";
import logo from "../../assets/images/logo.svg";
import bg from "../../assets/images/bg.png";
import {selects } from "../../data";
import Navbar from "./Navbar";

const Header = () => {
  const today = new Date().toISOString().split("T")[0];

  const {
    rentalDate,
    returnDate,
    location,
    setRentalDate,
    setReturnDate,
    setLocation,
    setCustomLocation,
  } = useRental();

  return (
    <section id="home">
    <div className="w-full lg:h-screen flex flex-col">
      {/* Navbar */}
          <Navbar/>
      {/* Hero */}
      <div
        className="w-full lg:h-[calc(100vh-75px)] bg-center bg-cover flex flex-col items-center justify-center py-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white font-bold text-[35px] lg:text-[63px] text-center">
          ابحث عن سيارتك المثالية
        </h1>
        <p className="text-white text-lg text-center mt-2">
          استأجر من أفضل تشكيلات السيارات والليموزين لدينا
        </p>

        {/* Filters */}
        <div className="w-full flex flex-col gap-5 lg:px-[310px] px-5 mt-10">
          <div className="w-full flex flex-col lg:flex-row gap-5">
            {selects.map((item) => (
              <div key={item.title} className="flex flex-col w-full gap-2">
                <span className="text-white font-medium">{item.title}</span>
                <div className="relative w-full">
                  {item.type === "date" ? (
                    <input
                      type="date"
                      min={item.title === "تاريخ الاجار" ? today : rentalDate}
                      value={
                        item.title === "تاريخ الاجار" ? rentalDate : returnDate
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        if (item.title === "تاريخ الاجار") {
                          setRentalDate(value);
                          if (returnDate && value > returnDate) {
                            setReturnDate("");
                          }
                        } else {
                          setReturnDate(value);
                        }
                      }}
                      className="w-full h-[60px] rounded px-3 pr-12 outline-none bg-white text-black cursor-pointer"
                    />
                  ) : (
                    <select
                      value={location}
                      onChange={(e) => {
                        const selected = e.target.value;
                        setLocation(selected);

                        if (selected === "المحل") {
                          setCustomLocation({ lat: 24.7136, lng: 46.6753 });
                        } else if (selected === "حدد على الخريطة") {
                          setCustomLocation(null); // سيختار المستخدم من الخريطة
                        } else {
                          setCustomLocation(null); // لا شيء محدد
                        }
                      }}
                      className="w-full h-[60px] rounded px-3 pr-12 outline-none bg-white text-black cursor-pointer appearance-none"
                    >
                      {item.options?.map((option, index) => (
                        <option
                          key={index}
                          value={option}
                          disabled={index === 0} // اجعل "اختر المكان" غير قابل للتحديد
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          {(location === "حدد على الخريطة" || location === "المحل") && (
            <div className="w-full h-[300px] rounded overflow-hidden mt-3">
              {location === "حدد على الخريطة" ? (
                <MapSelector
                  onSelect={(lat, lng) => setCustomLocation({ lat, lng })}
                />
              ) : (
                // خريطة بموقع ثابت عند اختيار "المحل"
                <MapSelector fixedLocation={{ lat: 24.7136, lng: 46.6753 }} />
              )}
            </div>
          )}

          {/* Button */}
          <a className="bg-primary w-full h-[60px] text-white font-bold uppercase mt-5 text-center flex justify-center items-center" href="#booking">
            ابحث الآن
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Header;
