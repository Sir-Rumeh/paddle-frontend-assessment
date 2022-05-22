import "./App.css";
// import components
import Header from "./components/Header/Header";
import ContactUs from "./components/ContactUs/ContactUs";

// import pages/routes
import ComingSoon from "./pages/comingsoon";
import About from "./pages/aboutus";
import Blog from "./pages/blog";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<ContactUs />
				<Header />
				<Routes>
					<Route path="/" element={<ComingSoon />} />
					<Route path="/aboutus" element={<About />} />
					<Route path="/:blog" element={<Blog />} />
				</Routes>
			</div>
		</BrowserRouter>

		// <div className="app">
		// 	<ContactUs />
		// 	<Header />
		// 	{/*  */}
		// 	<ComingSoon />
		// 	<AboutUs />
		// 	{/*  */}
		// </div>
	);
}

export default App;
