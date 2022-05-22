import React from "react";
import "./Button.css";

function Button({ buttonFunction, buttonStyle, buttonText }) {
	return (
		<div>
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
