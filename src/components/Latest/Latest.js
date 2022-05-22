import React from "react";
import "./Latest.css";

function Latest({ title, display }) {
	return (
		<div className="latest">
			<div className="latest-highlight">
				<h1>{title}</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Laborum dolor assumenda facere itaque,
					accusantium, voluptatum.
				</p>
			</div>
			<div className="search-form-container" style={display}>
				<form action="" className="search-form">
					<input type="text" placeholder="Search here" />
					<span className="search-icon-container">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							className="search-icon"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</span>
				</form>
			</div>
		</div>
	);
}

export default Latest;
