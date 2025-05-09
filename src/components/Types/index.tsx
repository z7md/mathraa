import { FC } from "react";
import { types } from "../../data";
import { motion } from "framer-motion";
//@ts-expect-error dsff
import { fadeIn, textVariant } from "../../utils/motion";
import {useNavigate} from "react-router-dom";

const Types: FC = () => {
  const navigate = useNavigate();

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
                <div className="absolute bottom-4 left-4 bg-primary text-white text-lg font-semibold px-3 py-2 rounded-lg shadow-md">
                  {item.price}
                </div>
              </div>
              <span className="font-bold text-title text-[22px] p-2">
                {item.title}
              </span>
              {/* <div className="text-secondary">
                <span className="font-semibold text-lg">
                  {item.price}
                </span>
              </div> */}
              {/* Book Now Button */}
              <span
                className="mt-1 p-2 font-bold text-white bg-primary py-2 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ease-in-out hover:bg-primary-dark hover:shadow-lg"
                onClick={() => {
                  navigate("/mathraa/item"+(index+1))
                }}
              >
                أطلب الآن
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Types;
