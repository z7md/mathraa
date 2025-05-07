import { useRental } from "../../context/RentalContext";
import MapSelector from "../MapSelector"; // تأكد من مكان حفظ هذا الملف
import bg from "../../assets/images/bg.png";
import { selects } from "../../data";
import { useEffect, useState } from "react";
import "../../index.css";

const Header = () => {
  const today = new Date().toISOString().split("T")[0];
  const [showMapTooltip, setShowMapTooltip] = useState(false); // State for showing the tooltip
  const {
    rentalDate,
    returnDate,
    location,
    setRentalDate,
    setReturnDate,
    setLocation,
    setCustomLocation,
  } = useRental();

  // دالة للحصول على الموقع الحالي
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      // تحقق من أذونات الموقع أولاً
      navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
        if (permissionStatus.state === "granted") {
          // إذا كان الإذن مسموحًا، حاول جلب الموقع
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              setCustomLocation({ lat, lng });
            },
            (error) => {
              console.error("Error getting location:", error);
              alert("لم نتمكن من تحديد موقعك. " + error.message);
            }
          );
        } else if (permissionStatus.state === "denied") {
          // إذا تم رفض الإذن سابقًا
          alert("لم يتم السماح بالوصول إلى موقعك. الرجاء السماح بإذن الموقع.");
        } else {
          // إذا كان الإذن غير معروف أو غير مؤكد
          alert("لم يتم تحديد حالة إذن الموقع.");
        }
      });
    } else {
      alert("الخرائط غير مدعومة في متصفحك");
    }
  };

  useEffect(() => {
    if (location === "حدد على الخريطة") {
      getCurrentLocation(); // جلب الموقع عند اختيار "حدد على الخريطة"
    }
  }, [location]); // كلما تغيّر موقع الحجز

  // Function to handle double-click event on map


  // Close the tooltip when "X" is clicked
  const handleTooltipClose = () => {
    setShowMapTooltip(false);
  };

  return (
    <section id="home">
      <div className="w-full lg:h-screen flex flex-col mt-[81px]">
        <div
          className="w-full lg:h-[calc(100vh-75px)] bg-center bg-cover flex flex-col items-center justify-center py-10"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1 className="text-white font-bold text-[35px] lg:text-[63px] text-center">
            أحجز حاويتك الآن
          </h1>

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
                        value={rentalDate}
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
                            setCustomLocation({ lat: 26.32599, lng: 43.97497 });
                          } else if (selected === "حدد على الخريطة") {
                            setCustomLocation(null); // سيختار المستخدم من الخريطة
                            setShowMapTooltip(true); // Show tooltip when map is selected
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

            {/* الخريطة تظهر عند اختيار "حدد على الخريطة" أو "المحل" */}
            {(location === "حدد على الخريطة" || location === "المحل") && (
              <div className="w-full h-[300px] rounded overflow-hidden mt-3">
                {showMapTooltip && (
                  <div className="fixed top-0 left-0 w-full bg-yellow-500 text-center text-white p-2 flex" onClick={handleTooltipClose}>
                    <span className="mr-6">
                     إذا قمت بالنقر مرتين على الخريطة، سيتم تحديد الموقع الحالي.
                     </span>
                    <button
                      onClick={handleTooltipClose}
                      className="fixed top-0 right-0 text-white font-bold text-3xl mr-2"
                    >
                      ×
                    </button>
                  </div>
                )}
                {location === "حدد على الخريطة" ? (
                  <MapSelector

                    onSelect={(lat, lng) => setCustomLocation({ lat, lng })}
                  />
                ) : (
                  // خريطة بموقع ثابت عند اختيار "المحل"
                  <MapSelector fixedLocation={{ lat: 26.32599, lng: 43.97497 }} />
                )}
              </div>
            )}

            {/* Button */}
            <a
              className="bg-primary w-full h-[60px] text-white font-bold uppercase mt-5 text-center flex justify-center items-center"
              href="#booking"
            >
              ابحث الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
