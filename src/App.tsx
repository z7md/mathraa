import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Test from "./components/Footer/Test";
import Header from "./components/Header";
import Navbar from "./components/Header/Navbar";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Types from "./components/Types";
import Hero from "./components/Header/Hero";
import {BrowserView} from "react-native-webview";
import {BrowserRouter,Routes,Route,Navigate,HashRouter} from "react-router-dom"
import Home from "./pages/Home";
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";

const App = () => {

	return (
		<BrowserRouter base="">
				<Routes>
					<Route path="/car_rent" element={<Home />} />
					<Route path="/car_rent/item1" element={<Item1 />} />
					<Route path="/car_rent/item2" element={<Item2 />} />
				</Routes>
				</BrowserRouter>
	);
};

export default App;
