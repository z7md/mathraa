import { useRental } from "../../context/RentalContext";
import MapSelector from "../MapSelector"; // تأكد من مكان حفظ هذا الملف
import bg from "../../assets/images/bg.png";
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
      navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
        if (permissionStatus.state === "granted") {
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
          alert("لم يتم السماح بالوصول إلى موقعك. الرجاء السماح بإذن الموقع.");
        } else {
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
  }, [location]);

  // Function to handle double-click event on map


  // Close the tooltip when "X" is clicked
  const handleTooltipClose = () => {
    setShowMapTooltip(false);
  };

  return (
    <section id="home">
      <div className="w-full lg:h-screen flex flex-col mt-[81px]">
        {/* Hero */}
        <div
          className="w-full lg:h-[calc(100vh-75px)] bg-center bg-cover flex flex-col items-center justify-center py-10"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1 className="text-white font-bold text-[35px] lg:text-[63px] text-center">
            أحجز حاويتك الآن
          </h1>

          <div className="w-full flex flex-col gap-5 lg:px-[310px] px-5 mt-10">
            {/* Rental and Return Dates */}
            <div className="w-full flex flex-col lg:flex-row gap-5">
              {/* Rental Date */}
              <div className="flex flex-col w-full gap-2">
                <span className="text-white font-medium">تاريخ الاجار</span>
                <div className="relative w-full">
                  <input
                    type="date"
                    min={today}
                    value={rentalDate}
                    onChange={(e) => {
                      const value = e.target.value;
                      setRentalDate(value);
                      if (returnDate && value > returnDate) {
                        setReturnDate(""); // Clear return date if rental date is later
                      }
                    }}
                    className="w-[340px] pr-12 md:w-full h-[60px] rounded px-3 outline-none bg-white text-black cursor-pointer text-right"
                  />
                  {/* <img
                    src={date}
                    alt="Location Icon"
                    className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5"
                  /> */}
                </div>
              </div>

              {/* Return Date */}
              <div className="flex flex-col w-full gap-2">
                <span className="text-white font-medium">تاريخ العودة</span>
                <div className="relative w-full">
                  <input
                    type="date"
                    min={rentalDate}
                    value={returnDate}
                    onChange={(e) => {
                      const value = e.target.value;
                      setReturnDate(value);
                    }}
                    className="w-[340px] pr-12 md:w-full h-[60px] rounded px-3  outline-none bg-white text-black cursor-pointer text-right"
                  />
                  {/* <img
                    src={date}
                    alt="Location Icon"
                    className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5"
                  /> */}
                </div>

              </div>

            </div>

            {/* Location */}
            <div className="flex flex-col w-full gap-2 mt-5">
              <span className="text-white font-medium">الموقع</span>
              <div className="relative w-full">
                <select
                  value={location}
                  onChange={(e) => {
                    const selected = e.target.value;
                    setLocation(selected);

                    if (selected === "المحل") {
                      setCustomLocation({ lat: 26.32599, lng: 43.97497 });
                    } else if (selected === "حدد على الخريطة") {
                      setCustomLocation(null); // سيختار المستخدم من الخريطة
                    } else {
                      setCustomLocation(null); // لا شيء محدد
                    }
                  }}
                  className="w-[340px] pr-12  md:w-full h-[60px] rounded px-3 outline-none bg-white text-black cursor-pointer appearance-none text-right"
                >
                  <option value="اختر الموقع" disabled>اختر الموقع</option>
                  <option value="المحل">المحل</option>
                  <option value="حدد على الخريطة">حدد على الخريطة</option>
                </select>
                {/* <img
                  src={loc}
                  alt="Location Icon"
                  className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5"
                /> */}
              </div>
            </div>

            {/* Map Display */}
            {(location === "حدد على الخريطة") && (
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
