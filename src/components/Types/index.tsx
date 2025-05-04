import { useState } from "react";
import { types } from "../../data";
import { useRental } from "../../context/RentalContext";

const Types = () => {
	const [items, setItems] = useState([
		{ title: "الجميع", active: true },
		{ title: "نوع 1", active: false },
		{ title: "نوع 2", active: false },
		{ title: "نوع 3", active: false },
	]);

	const { rentalDate, returnDate, location,customLocation } = useRental();

	const handleClick = (title: string) => {
		setItems((prev) =>
			prev.map((i) => ({
				...i,
				active: i.title === title,
			}))
		);
	};

	// Get the currently active filter
	const activeItem = items.find((item) => item.active);

	// Filter types based on the active item's title
	const filteredTypes =
		activeItem?.title === "الجميع" || !activeItem
			? types
			: types.filter((type) => type.type === activeItem.title);

	return (
		<section id="booking">
		<div className="w-full lg:px-[310px] px-5 flex flex-col gap-8 items-center justify-center mt-[140px]">
			<span className="text-title lg:text-[48px] text-[35px] font-bold uppercase">
				find by type
			</span>

			{/* Filter buttons */}
			<div className="w-full flex items-center justify-center gap-5 overflow-x-auto">
				{items.map((item) => (
					<div
						key={item.title}
						onClick={() => handleClick(item.title)}
						className={`h-11 px-6 cursor-pointer font-medium flex items-center border justify-center text-[17px] ${
							item.active
								? "bg-title text-white border-title"
								: "bg-white text-disabled border-gray-300"
						}`}
					>
						{item.title}
					</div>
				))}
			</div>

			{/* Cars */}
			<div className="w-full flex items-center flex-wrap justify-center gap-5">
				{filteredTypes.map((item, index: number) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-2 lg:w-auto w-full"
					>
						<img
							src={item.image}
							alt={item.title}
							className="lg:h-[210px] w-full"
						/>
						<span className="font-bold text-title text-[22px]">
							{item.title}
						</span>
						<div className="text-secondary">
							تبدا من{" "}
							<span className="font-semibold text-lg">
								{item.price}/يوم
							</span>
						</div>
						<span
							className="mt-1 font-bold border-b border-placeholder pb-1 text-sm cursor-pointer"
							onClick={() => {
								const phone = "966508559192"; // ← ضع رقمك هنا
								const locationType = location; // "المحل" أو "أي مكان"
								const mapLink = customLocation
? `https://www.google.com/maps?q=${customLocation.lat},${customLocation.lng}`
: "لا يوجد موقع محدد";
							  
								const message = `
طلب حجز سيارة
							  
نوع الموقع: ${locationType}
رابط الموقع: ${mapLink}
							  
تاريخ الإيجار: ${rentalDate}
تاريخ الإرجاع: ${returnDate || "غير محدد"}
							  
اسم السيارة: ${item.title}
							  
تم إرسال هذا الطلب من الموقع.`;
							  
								const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
								window.open(url, "_blank");
							  }}
							  
						>
							أحجز الآن
						</span>
					</div>
				))}
			</div>
		</div>
		</section>
	);
};

export default Types;
