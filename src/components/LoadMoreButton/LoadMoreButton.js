import React from "react";
import "./LoadMoreButton.css";

function LoadMoreButton({ callback }) {
	return (
		<div className="load-more-button">
			<button className="github-button" onClick={callback()}>
				Load More
			</button>
		</div>
	);
}

export default LoadMoreButton;
