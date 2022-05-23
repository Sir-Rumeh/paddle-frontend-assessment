import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";

function ComingSoon() {
	return (
		<div>
			<div className="home">
				<div className="home-effect-1"></div>
				<div className="home-effect-2"></div>
				<div className="home-effect-3"></div>
				<div className="home-effect-4"></div>
				{/* <div className="home-effect-5"></div> */}
				<HeroSection />
			</div>
			<Footer />
		</div>
	);
}

export default ComingSoon;
