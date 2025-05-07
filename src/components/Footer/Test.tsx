// TestimonialsSection.tsx

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
//@ts-expect-error dsff
import { fadeIn, textVariant } from "../../utils/motion";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Malek Ghlab",
    text: "ما شاء الله.الشركة عنوان للتنظيف الدقيق في مدينةالقصيم...",
  },
  {
    id: 2,
    name: "Om Lamees",
    text: "دلله ربي وفقني وتعاملت معهم وكان اختيار موفق...",
  },
  {
    id: 3,
    name: "فهد الضبيعي",
    text: "بكل صراحه انا متعامل مع شركات تنظيف كثير...",
  },
  {
    id: 4,
    name: "naif almrwni",
    text: `الصراحة من ابدع ما يكون\n1- اخلاق العمال جدا رائعة\n2- السرعة\n3- النظافة\nانصح بها وبقوة\nالله يوفقهم`,
  },
  {
    id: 5,
    name: "Ahmad Mohmad",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `بيض الله وجهكم الصراحة شغلكم يوسع الصدر...`,
  },
  {
    id: 6,
    name: "Afrah Ebrahim",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: `بدون مبالغة أفضل شركة تنظيف بالقصيم...`,
  },
];

const Test: FC = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-12"
      >
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          اراء العملاء
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12 py-4">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="w-20 h-20 mx-auto mb-4"
                >
                  <FaRegUserCircle className="w-full h-full text-primary" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span
                      key={starIndex}
                      variants={fadeIn("up", 0.1 * starIndex)}
                      className="text-red-600"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p variants={fadeIn("up", 0.3)} className="text-gray-600">
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            variants={fadeIn("right", 0.8)}
            whileHover={{ scale: 0.7 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn("left", 0.8)}
            whileHover={{ scale: 0.7 }}
            whileTap={{ scale: 0.8 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Test;
