import Footer from "../components/Footer";
import t2 from "../assets/images/hawe2.png";
import Navbar2 from "../components/Header/Navbar2";
import { useEffect, useState } from "react";
import { useRental } from "../context/RentalContext";
import { motion } from "framer-motion";
//@ts-expect-error dsff
import { fadeIn, } from "../utils/motion";
import MapSelector from "../components/MapSelector";
import "../index.css";
const Item1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const today = new Date().toISOString().split("T")[0];
  const [showMapTooltip, setShowMapTooltip] = useState(false);
  const {
    rentalDate,
    location,
    setRentalDate,
    setLocation,
    setCustomLocation,
    customLocation,
  } = useRental();

  const [quan, setQuan] = useState(1);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
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
      setShowMapTooltip(true); // Show tooltip when the user selects "حدد على الخريطة"
      getCurrentLocation();
    } else {
      setShowMapTooltip(false); // Hide tooltip when the location is not "حدد على الخريطة"
    }
  }, [location]);

  const handleTooltipClose = () => {
    setShowMapTooltip(false);
  };

  const types = [
    { title: "12 ياردة", price: "200 ريال", image: t2, type: "نوع 1" },
  ];

  return (
    <div className="w-full flex flex-col almarai-extrabold justify-center items-center ">
      <Navbar2 />
      <motion.div
        className="w-[full] flex flex-col gap-5 px-5 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[34px] lg:text-[63px] font-bold text-center text-primary mt-[81px]">
          أحجز حاويتك الآن
        </h1>

        <div className="w-full flex flex-wrap justify-center gap-5">
          {types.map((item, index: number) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-2 w-full md:w-[48%] lg:w-auto"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="lg:h-[210px] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                />
                {/* Price Overlay */}
                <div className="absolute mt-[10px] left-4 bg-primary text-white text-lg font-semibold px-3 py-2 rounded-lg shadow-md">
                  {item.price}
                </div>
              </div>
              <span className="font-bold text-title text-[22px]">
                {item.title}
              </span>
              <div className="text-secondary">
                <span className="font-semibold text-lg">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
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
                className="w-full h-[60px] rounded px-3 outline-none bg-white border border-primary text-primary text-right "
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col w-full gap-2 mt-5">
            <span className="text-primary  font-medium">الموقع</span>
            <div className="relative w-full">
              <select
                value={location}
                onChange={(e) => {
                  const selected = e.target.value;
                  setLocation(selected);
                  if (selected === "حدد على الخريطة") {
                    setCustomLocation(null); // سيختار المستخدم من الخريطة
                  } else {
                    setCustomLocation(null); // لا شيء محدد
                  }
                }}
                className="w-full h-[60px] rounded px-3 outline-none bg-white border-primary text-primary cursor-pointer appearance-none text-right border"
              >
                <option value="اختر الموقع" disabled>
                  اختر الموقع
                </option>
                <option value="حدد على الخريطة">حدد على الخريطة</option>
              </select>

              {/* Quantity Selector */}
              <div className="flex flex-col w-full gap-2 mt-5">
                <label className="text-primary font-medium">الكمية</label>
                <select
                  value={quan}
                  onChange={(e) => setQuan(Number(e.target.value))}
                  className="w-full h-[60px] rounded px-3 outline-none bg-white border-primary text-primary cursor-pointer text-right border"
                >
                  {Array.from({ length: 20 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Map Display */}
          {location === "حدد على الخريطة" && (
            <div className="w-full h-[300px] rounded overflow-hidden mt-3">
              {showMapTooltip && (
                <div
                  className="fixed top-0 left-0 w-full bg-yellow-500 text-center text-white p-2 flex z-[100]"
                  onClick={handleTooltipClose}
                >
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
                <MapSelector fixedLocation={{ lat: 26.32599, lng: 43.97497 }} />
              )}
            </div>
          )}
          <span
            className="mt-1 w-full h-[60px] px-3 font-bold text-center flex justify-center items-center text-white bg-primary  rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ease-in-out hover:bg-primary-dark hover:shadow-lg"
            onClick={() => {
              const phone = "966553116613";
              const mapLink = customLocation
                ? `https://www.google.com/maps?q=${customLocation.lat},${customLocation.lng}`
                : "لا يوجد موقع محدد";

                const message = `**طلب حجز حاوية**

**رابط الموقع:** ${mapLink}
                
**تاريخ الإيجار:** ${rentalDate}
                
**نوع الحاوية:** 12 ياردة
                
**الكمية المطلوبة:** ${quan}
                
تم إرسال هذا الطلب من الموقع.`;

              const url = `https://wa.me/${phone}?text=${encodeURIComponent(
                message
              )}`;
              window.open(url, "_blank");
            }}
          >
            أطلب الآن
          </span>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Item1;
