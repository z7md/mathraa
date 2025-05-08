import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
// @ts-expect-error ثبيسش
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
    text: "ما شاء الله. الشركة عنوان للتنظيف الدقيق في مدينة القصيم...",
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

const TestimonialsSection: FC = () => {
  return (
    <section id="testimonials" className="py-16 px-4 w-full max-w-screen-xl mx-auto">
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
        أراء العملاء
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
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  }}
          style={{ width: "100%", height: "100%" }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!h-auto">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <FaRegUserCircle className="w-full h-full text-primary" />
                  )}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-xl mb-3">{testimonial.name}</h3>
                <p className="text-gray-600 whitespace-pre-line">{testimonial.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* أزرار التنقل المخصصة */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
          <button
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition"
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
