import { FC } from "react";
import { steps } from "../../data";
import { motion } from "framer-motion";
//@ts-expect-error dsff
import { fadeIn, textVariant } from "../../utils/motion";

const Steps: FC = () => {
  return (
    <section id="about" className="">
      <div className="w-full lg:px-[310px] px-5 flex flex-col gap-8 items-center justify-center mt-[140px]">
      {/* Section Title */}
      <motion.span
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-title lg:text-[48px] text-[35px] font-bold uppercase"
        >
        من نحن
        </motion.span>

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
            <span className=" mt-1 text-gray-600 text-sm">
              {item.description}
            </span>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Steps;
