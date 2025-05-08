import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Test from "../components/Footer/Test";
import Header from "../components/Header";
import Navbar from "../components/Header/Navbar";
import Services from "../components/Services";
import Steps from "../components/Steps";
import Types from "../components/Types";
import Hero from "../components/Header/Hero";
import { useRental } from "../context/RentalContext";

const App = () => {
	return (
		<div className="w-full flex flex-col almarai-extrabold">
			<Navbar/>
			<Hero/>
            <Types />
			<Steps />
			<Services />
			<Test/>
			<Footer />
		</div>
	);
};

export default App;
