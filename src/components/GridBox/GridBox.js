import React from "react";
import "./GridBox.css";
import Work from "../../assets/img/work.png";

function GridBox({ visibility, display, title }) {
	return (
		<div className="grid-box" style={display}>
			<img src={Work} alt="man working in office" style={visibility} />
			<small>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILIATE</small>
			<h3>{title}</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Nihil, rem inventore magnam vel necessitatibus animi illum.
			</p>
			<span>READ MORE</span>
		</div>
	);
}

export default GridBox;
