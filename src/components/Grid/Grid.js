import React from "react";
import "./Grid.css";
import GridBox from "../GridBox/GridBox";

function Grid({ display }) {
	return (
		<div className="grid-container">
			<GridBox
				title={"12 Popup Use Cases To Increase Conversions"}
				visibility={display}
			/>
			<GridBox
				title={"12 Popup Use Cases To Increase Conversions"}
				visibility={display}
			/>
			<GridBox
				title={"12 Popup Use Cases To Increase Conversions"}
				visibility={display}
			/>
			<GridBox
				title={"12 Popup Use Cases To Increase Conversions"}
				display={display}
			/>
			<GridBox
				title={"12 Popup Use Cases To Increase Conversions"}
				display={display}
			/>
			<GridBox
				title={"12 Popup Use Cases To Increase Conversions"}
				display={display}
			/>
		</div>
	);
}

export default Grid;
