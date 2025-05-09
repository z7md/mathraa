import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";

const App = () => {

	return (
		<BrowserRouter>
				<Routes>
					<Route path="/car_rent" element={<Home />} />
					<Route path="/car_rent/item1" element={<Item1 />} />
					<Route path="/car_rent/item2" element={<Item2 />} />
				</Routes>
				</BrowserRouter>
	);
};

export default App;
