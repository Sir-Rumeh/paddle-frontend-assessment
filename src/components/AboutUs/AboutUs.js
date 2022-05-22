import React from "react";
import "./AboutUs.css";

function AboutUs() {
	return (
		<div className="about-us">
			<div className="left">
				<div className="about-us-efffect-1"></div>
				<div className="about-us-overlay"></div>
			</div>
			<div className="right">
				<div className="about-us-efffect-2"></div>
			</div>
			<div className="title">
				<span className="line"></span>
				<span className="text">about us</span>
			</div>
			<div className="heading">
				Built for SaaS <br /> and E-Commerce
			</div>
			<div className="description">
				Our tools are easy to set up and use with a user friendly
				dashboard that enables you to set up, launch, automate and
				manage multi-affiliate campaigns in 5 minutes.
			</div>
		</div>
	);
}

export default AboutUs;
