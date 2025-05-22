import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import heroImage from "../../assets/images/Heroii.webp"; // Optimized image in WebP format

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
        position: 'relative',
        height: '100vh',
        width: "100vw",
      }}
    >
      {/* Overlay to enhance text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8 relative z-10">
        <h1

          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          <span className="text-[#22257e] relative inline-block p-2">
            مع مثرى {"    "}
          </span>
          ، أحجز حاويتك بسرعة وبسهولة!
        </h1>

        <p
          className="text-white text-lg md:text-xl max-w-xl"
        >
          خدمة احترافية ، أسعار منافسة ، أطلب حاويتك الآن
        </p>

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
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 relative z-20"
      >
        <a
          className="bg-primary w-full h-[60px] text-white font-bold uppercase text-center flex justify-center items-center mb-[100px] md:mb-0"
          href="#booking"
        >
          ابحث الآن
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
