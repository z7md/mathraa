import { useRental } from "../../context/RentalContext";
import MapSelector from "../MapSelector";
import { useEffect, useState } from "react";
import loc from "../../assets/images/loc.svg";
import date from "../../assets/images/date.svg";
import bg from "../../assets/images/logo-white.png";
import { motion } from "framer-motion";
import "../../index.css";

const Header: React.FC = () => {
  const today = new Date().toISOString().split("T")[0];
  const [showMapTooltip, setShowMapTooltip] = useState(false);
  const {
    rentalDate,
    returnDate,
    location,
    setRentalDate,
    setReturnDate,
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
      getCurrentLocation();
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
              <span className="text-primary font-medium">الموقع</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-[60px] rounded px-3 outline-none bg-white text-primary border border-primary"
              >
                <option value="اختر الموقع" disabled>اختر الموقع</option>
                <option value="حدد على الخريطة">حدد على الخريطة</option>
              </select>
            </div>

            {/* Map Display */}
            {(location === "حدد على الخريطة" || location === "المحل") && (
              <div className="w-full h-[300px] rounded mt-3">
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
