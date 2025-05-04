import banner from "../../assets/images/banner.png";

const Banner = () => {
	return (
		<div
			className="w-full mt-[140px] h-[710px] relative bg-cover bg-center flex flex-col items-center justify-center lg:px-0 px-5"
			style={{ backgroundImage: `url(${banner})` }}
		>
			<div className="w-full h-full absolute top-0 left-0 bg-[#151515] opacity-50 z-[50]"></div>
			<span className="text-white font-bold text-[46px] z-[100] uppercase">معلومات التواصل</span>
			<p className="text-white text-center max-w-[650px] mt-2 z-[100]">
			نحن دائمًا في خدمتك للإجابة على استفساراتك. لا تتردد في التواصل معنا في أي وقت.
			</p>
			<span className="text-white font-medium text-[30px] border-b border-white cursor-pointer mt-6 z-[100]">
			📞 اتصل بنا: (99) 124 1242 12
			</span>
			<button className="bg-primary w-[178px] h-[60px] text-white font-bold uppercase mt-[50px] z-[100]">
				contact us
			</button>
		</div>
	);
};

export default Banner;
