import { FC } from "react";
import { steps } from "../../data";
import { motion } from "framer-motion";
//@ts-expect-error dsff
import { fadeIn, textVariant } from "../../utils/motion";

const Steps: FC = () => {
  return (
    <section id="about" className="w-full mt-[40px] px-5 lg:px-[310px]">
      {/* Section Title */}
      <motion.h2
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center text-3xl font-bold mb-10 text-title lg:text-[48px] text-[35px]"
      >
        من نحن
      </motion.h2>

      {/* Steps */}
      <div className="flex items-center justify-between lg:flex-row flex-col gap-8">
        {steps.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeIn("up", 0.2 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:items-start items-center text-center lg:text-start"
          >
            <span className="text-placeholder font-bold italic text-[44px]">
              {item.id}
            </span>
            <span className="text-secondary font-bold text-lg mt-2">
              {item.title}
            </span>
            <span className="text-description mt-1 text-gray-600 text-sm">
              {item.description}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
