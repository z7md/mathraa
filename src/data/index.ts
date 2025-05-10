
import t1 from "../assets/images/hawe1.png";
import t2 from "../assets/images/hawe2.png";
// import t3 from "../assets/images/t3.png";
// import t4 from "../assets/images/t4.png";
// import t5 from "../assets/images/t5.png";
// import t6 from "../assets/images/t6.png";
// import t7 from "../assets/images/t7.png";
// import t8 from "../assets/images/t8.png";


import s2 from "../assets/images/save.svg";
import s3 from "../assets/images/money.svg";
import s4 from "../assets/images/cha.svg";
// import vt from "../assets/images/vt.svg";
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


export const types = [
  { title: "20 ياردة", price: "250 ريال", image: t1, type: "نوع 1" },
  { title: "12 ياردة", price: "200 ريال", image: t2, type: "نوع 1" },
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

export const services = [
  // {
  //   title: "سيارات متنوعة",
  //   description: "نوفر لك مجموعة واسعة من السيارات لتناسب جميع احتياجاتك.",
  //   icon: s1,
  // },
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
  // { label: "أراء العملاء", href: "#testimonials" },
];
export const links1 = [
  { label: "الصفحة الرئيسية", href: "/mathraa" },
  { label: "أطلب حاوية", href: "/mathraa/booking" },
  { label: "من نحن", href: "/mathraa/about" },
  // { label: "أراء العملاء", href: "/mathraa/testimonials" },
];
export const selects = [
  {
    title: "تاريخ الاجار",// تأكد من الصورة
    type: "date",
  },
  {
    title: "تاريخ الارجاع",
    type: "date",
  },
  {
    title: "موقع الحجز",
    options: ["اختر الموقع", "حدد على الخريطة"],
  },
];
