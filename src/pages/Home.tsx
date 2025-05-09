
import Footer from "../components/Footer";
import Test from "../components/Footer/Test";
import Navbar from "../components/Header/Navbar";
import Services from "../components/Services";
import Steps from "../components/Steps";
import Types from "../components/Types";
//@ts-expect-error dsff
import Hero from "../components/Header/Hero";

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
