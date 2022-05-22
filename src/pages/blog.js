import React from "react";
import ArticlesAndNews from "../components/ArticlesAndNews/ArticlesAndNews";
import Latest from "../components/Latest/Latest";
import Grid from "../components/Grid/Grid";
import Button from "../components/Button/Button";
import GotAQuestion from "../components/GotAQuestion/GotAQuestion";

function Blog() {
	const style = {
		display: "none",
	};
	const buttonStyle = {
		backgroundColor: "purple",
		color: "white",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "4rem",
		marginBottom: "4rem",
		width: "14.5rem",
		height: "4rem",
	};
	const color = {
		color: "white",
	};
	return (
		<div className="blog-container">
			<ArticlesAndNews />
			<Latest title={"Latest From The Blog"} />
			<Grid />
			<Latest title={"Recent Articles"} display={style} />
			<Grid display={style} />
			<Button buttonStyle={buttonStyle} buttonText={"load more"} />
			<GotAQuestion
				questionTitle={"I want To Know More About Matricks"}
				description={"Learn Who We Are And What Drives Us."}
				style={color}
			/>
		</div>
	);
}

export default Blog;
