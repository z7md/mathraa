import { FC } from "react";
import { types } from "../../data";
import { useRental } from "../../context/RentalContext";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Types: FC = () => {
  const { rentalDate, returnDate, location, customLocation } = useRental();

  return (
    <section id="booking">
      <div className="w-full lg:px-[310px] px-5 flex flex-col gap-8 items-center justify-center mt-[140px]">
        {/* Section Title with Motion */}
        <motion.span
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-title lg:text-[48px] text-[35px] font-bold uppercase"
        >
          أختر حاويتك
        </motion.span>

        {/* Container Types with Animation */}
        <div className="w-full flex items-center flex-wrap justify-center gap-5">
          {types.map((item, index: number) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-2 lg:w-auto w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="lg:h-[210px] w-full"
              />
              <span className="font-bold text-title text-[22px]">
                {item.title}
              </span>
              <div className="text-secondary">
                تبدأ من{" "}
                <span className="font-semibold text-lg">
                  {item.price}/يوم
                </span>
              </div>
              <span
                className="mt-1 font-bold border-b border-placeholder pb-1 text-sm cursor-pointer"
                onClick={() => {
                  const phone = "966508559192";
                  const locationType = location;
                  const mapLink = customLocation
                    ? `https://www.google.com/maps?q=${customLocation.lat},${customLocation.lng}`
                    : "لا يوجد موقع محدد";

                  const message = `طلب حجز سيارة

نوع الموقع: ${locationType}
رابط الموقع: ${mapLink}

تاريخ الإيجار: ${rentalDate}
تاريخ الإرجاع: ${returnDate || "غير محدد"}

اسم السيارة: ${item.title}

تم إرسال هذا الطلب من الموقع.`;

                  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(url, "_blank");
                }}
              >
                أحجز الآن
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Types;
