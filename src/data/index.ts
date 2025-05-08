import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
// import t3 from "../assets/images/t3.png";
// import t4 from "../assets/images/t4.png";
// import t5 from "../assets/images/t5.png";
// import t6 from "../assets/images/t6.png";
// import t7 from "../assets/images/t7.png";
// import t8 from "../assets/images/t8.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import s1 from "../assets/images/car.svg";
import s2 from "../assets/images/save.svg";
import s3 from "../assets/images/money.svg";
import s4 from "../assets/images/cha.svg";
// import vt from "../assets/images/vt.svg";
import loc from "../assets/images/loc.svg";
import date from "../assets/images/date.svg";
export const steps = [
  {
    id: "01",
    title: "شركة متخصصة",
    description: "نقل وإدارة المخلفات بأنواعها بأسلوب احترافي.",
  },
  {
    id: "02",
    title: "فريق مدرب",
    description: "كوادر مؤهلة بخبرة ميدانية ومعايير مهنية عالية.",
  },
  {
    id: "03",
    title: "التزام بيئي",
    description: "نطبق أعلى معايير النظافة والسلامة البيئية.",
  },
  {
    id: "04",
    title: "حاويات مرنة",
    description: "نوفر حاويات 12 و20 ياردة حسب احتياجك.",
  },
  {
    id: "05",
    title: "عقود نظافة",
    description: "عقود مرنة تناسب الأفراد والمشاريع.",
  },
  {
    id: "06",
    title: "أسعار منافسة",
    description: "نوفر الخدمة بأفضل جودة وأقل تكلفة.",
  },
  {
    id: "07",
    title: "نطاق الخدمة",
    description: "نخدم منطقة القصيم – بريدة وما حولها.",
  },
  {
    id: "08",
    title: "رؤية واضحة",
    description: "بيئة أنظف، خدمة أسرع، وكفاءة أعلى.",
  },
];

export const brands = [
  { title: "HYUNDAI", image: c1 },
  { title: "JEEP", image: c2 },
  { title: "BMW", image: c3 },
  { title: "JEEP", image: c4 },
  { title: "FORD", image: c5 },
  { title: "RANGE ROVER", image: c6 },
];

export const types = [
  { title: "12 ياردة", price: "200 ريال", image: t1, type: "نوع 1" },
  { title: "20 ياردة", price: "250 ريال", image: t2, type: "نوع 1" },

];

export const plans = [
  {
    title: "essential",
    price: "$29.50",
    services: [
      "✓ Quisque rhoncus",
      "✓ Lorem ipsum dolor",
      "✓ Vivamus velit mir",
      "✓ Velit mir",
      "✓ Elit mir ivamus",
    ],
  },
  {
    title: "recommended",
    price: "$44.40",
    services: [
      "✓ Quisque rhoncus",
      "✓ Lorem ipsum dolor",
      "✓ Vivamus velit mir",
      "✓ Elit mir ivamus",
      "✓ Lorem ipsum dolor",
      "✓ Ipsum dolor",
    ],
  },
  {
    title: "pro",
    price: "$70.50",
    services: [
      "✓ Quisque rhoncus",
      "✓ Lorem ipsum dolor",
      "✓ Vivamus velit mir",
      "✓ Velit mir",
      "✓ Elit mir ivamus",
      "✓ Quisque rhoncus",
      "✓ Vivamus velit mir",
    ],
  },
];

export const posts = [
  {
    title: "Safest car rental services in 2024",
    date: "Feb 22,2024 / Tips",
    image: p1,
  },
  {
    title: "Best car collection in the world",
    date: "Feb 22,2024 / Tips",
    image: p2,
  },
  {
    title: "Which car is the best for travel",
    date: "Feb 22,2024 / Tips",
    image: p3,
  },
];

export const services = [
  {
    title: "سيارات متنوعة",
    description: "نوفر لك مجموعة واسعة من السيارات لتناسب جميع احتياجاتك.",
    icon: s1,
  },
  {
    title: "حجز سهل",
    description: "إجراءات الحجز لدينا بسيطة وسريعة دون أي تعقيد.",
    icon: s2,
  },
  
  {
    title: "أفضل الاسعار",
    description: "نضمن لك أفضل الأسعار التنافسية في السوق.",
    icon: s3,
  },
  {
    title: "دعم العملاء",
    description: "فريقنا متواجد دائمًا لمساعدتك على مدار الساعة.",
    icon: s4,
  },




];

export const links = [
  { label: "الصفحة الرئيسية", href: "#home" },
  { label: "أطلب حاوية", href: "#booking" },
  { label: "من نحن", href: "#about" },
  { label: "أراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];
export const selects = [

  {
    title: "تاريخ الاجار",
    icon: date, // تأكد من الصورة
    type: "date",
  },
  {
    title: "تاريخ الارجاع",
    icon: date,
    type: "date",
  },
  {
    title: "موقع الحجز",
    icon: loc, // تأكد من الصورة
    options: ["اختر الموقع", "حدد على الخريطة"],
  },
];
