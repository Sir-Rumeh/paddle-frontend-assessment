import React from "react";
import "./Button.css";

function Button({ buttonFunction, buttonStyle, buttonText }) {
	return (
		<div className="load-more-button">
			<button
				onClick={buttonFunction}
				className="contact-us"
				style={buttonStyle}
			>
				{buttonText}
			</button>
		</div>
	);
}

export default Button;
