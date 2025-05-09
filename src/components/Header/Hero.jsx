import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import heroImage from "../../assets/images/Heroii.png"; // تأكد من مسار الصورة


const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto  "
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // لتثبيت الصورة
        position: 'relative',
        height: '100vh',
        width:"100vw" // لضمان أن الصورة تغطي كامل الشاشة
      }}
    >
      {/* Overlay to enhance text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8 relative z-10">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          style={{
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // إضافة الظل للنص
          }}
        >
          <span className="text-[#22257e] relative inline-block p-2"
                    style={{
                      textShadow: '2px 2px 8px rgba(155, 155, 155, 1.1)', // إضافة الظل للنص
                    }}
          >
            مع مثرى {"    "}
          </span>
          ، أحجز حاويتك بسرعة وبسهولة!
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-white text-lg md:text-xl max-w-xl"
          style={{
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // إضافة الظل للنص
          }}
        >
          خدمة احترافية ، أسعار منافسة ، أطلب حاويتك الآن
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.7)}
          className="flex gap-4"
          initial="hidden"
          whileInView="show"
        >
          {/* Contact buttons */}
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 relative z-20" // إضافة z-index هنا
      >
        <a
          className="bg-primary w-full h-[60px] text-white font-bold uppercase  text-center flex justify-center items-center mb-[100px] md:mb-0"
          href="#booking"
          style={{
            zIndex: 10, // اجعل الزر يظهر فوق الـ overlay
          }}
        >
          ابحث الآن
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
