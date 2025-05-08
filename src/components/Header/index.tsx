import { useRental } from "../../context/RentalContext";
import MapSelector from "../MapSelector";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";

const Header: React.FC = () => {
  const today = new Date().toISOString().split("T")[0];
  const [showMapTooltip, setShowMapTooltip] = useState(false);
  const {
    rentalDate,
    location,
    setRentalDate,
    setLocation,
    setCustomLocation,
  } = useRental();

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
        }
      });
    } else {
      alert("الخرائط غير مدعومة في متصفحك");
    }
  };

  useEffect(() => {
    if (location === "حدد على الخريطة") {
      setShowMapTooltip(true);  // Show tooltip when the user selects "حدد على الخريطة"
      getCurrentLocation();
    } else {
      setShowMapTooltip(false);  // Hide tooltip when the location is not "حدد على الخريطة"
    }
  }, [location]);

  const handleTooltipClose = () => {
    setShowMapTooltip(false);
  };

  return (
    <section id="home" className="">
      <div className="w-full lg:h-screen flex flex-col lg:flex-row mt-[81px] lg:mt-0 justify-center items-center">
        <motion.div
          className="w-[60%] flex flex-col gap-5 px-5 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[35px] lg:text-[63px] font-bold text-center text-primary ">
            أحجز حاويتك الآن
          </h1>

          {/* Input Fields Section */}
          <div className="flex flex-col gap-5">
            <div className="w-full flex flex-col lg:flex-row gap-5">
              {/* Rental Date */}
              <div className="flex flex-col w-full gap-2">
                <span className="text-primary font-medium ">تاريخ الاجار</span>
                <input
                  type="date"
                  min={today}
                  value={rentalDate}
                  onChange={(e) => setRentalDate(e.target.value)}
                  className="w-full h-[60px] rounded px-3 outline-none bg-white border border-primary text-primary "
                />
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
              </div>
            </div>

            {/* Map Display */}
            {(location === "حدد على الخريطة") && (
              <div className="w-full h-[300px] rounded overflow-hidden mt-3">
                {showMapTooltip && (
                  <div className="fixed top-0 left-0 w-full bg-yellow-500 text-center text-white p-2 flex z-[100]" onClick={handleTooltipClose}>
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
                  <MapSelector onSelect={(lat, lng) => setCustomLocation({ lat, lng })} />
                ) : (
                  <MapSelector fixedLocation={{ lat: 26.32599, lng: 43.97497 }} />
                )}
              </div>
            )}
            <a
              className="bg-primary w-full h-[60px] text-white font-bold uppercase mt-5 text-center flex justify-center items-center"
              href="#booking"
            >
              ابحث الآن
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
