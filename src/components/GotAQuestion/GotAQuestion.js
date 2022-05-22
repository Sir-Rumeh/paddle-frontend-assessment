import React from "react";
import "./GotAQuestion.css";

function GotAQuestion({ questionTitle, description, style }) {
	return (
		<div className="got-a-question-container">
			<div className="got-a-question-article">
				<h1 className="" style={style}>
					{questionTitle}
				</h1>
				<br />
				<h4 className="how-it-works" style={style}>
					{description}
				</h4>
				<div className="contact-link"></div>
				<a href="/">
					<span className="text">Contact Us </span>

					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 back-to-home-icon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</span>
				</a>
			</div>
			<div className="another-effect"></div>
			<div className="overlay"></div>
		</div>
	);
}

export default GotAQuestion;
