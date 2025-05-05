import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Header/Navbar";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Types from "./components/Types";

const App = () => {
	return (
		<div className="w-full flex flex-col almarai-extrabold">
			<Navbar/>
			<Header />
			<Steps />
			<Types />
			<Banner />

			<Services />
			<Footer />
		</div>
	);
};

export default App;
