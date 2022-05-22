import React from "react";
import "./HeroSection.css";

import CountDown from "../CountDown/CountDown";
import ContactForm from "../ContactForm/ContactForm";

function HeroSection() {
	return (
		<div className="hero-section">
			<h1 className="hero-title">something awesome is coming soon</h1>
			<p className="hero-text">
				Your all-in-on affiliate marketing tracking software{" "}
				<strong>track, automate</strong> and{" "}
				<strong>optimize</strong> your campaigns.{" "}
			</p>
			<div class="countdown-container">
				<CountDown />
			</div>
			<ContactForm />
		</div>
	);
}

export default HeroSection;
