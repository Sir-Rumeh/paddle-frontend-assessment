import React from "react";
import "./Header.css";
import logo from "../../assets/img/metricks-white.png";
// routiing
import { Link } from "react-router-dom";

//
import Button from "../Button/Button";

function Header() {
	const style = {
		color: "white",
		backgroundColor: "blue",
	};

	function showContactUsPage() {
		const contactUsPage = document.querySelector(
			".contact-us-page-component"
		);
		contactUsPage.classList.toggle("show-contact-us-page");
	}

	return (
		<div>
			<header className="header">
				{/* START NAV MENU */}
				<nav className="navbar">
					<div className="logo">
						<a href="/">
							<img src={logo} alt="metricks logo" />
						</a>
						<h4 className="logo-text">METRICKS</h4>
					</div>
					{/* START MAIN MENU */}
					<div className="main-menu">
						<ul className="main-menu-list">
							<li>
								<Link to="/aboutus">
									<span>about us</span>
								</Link>
							</li>
							<li>
								<Link to="/blogs">
									<span>blog</span>
								</Link>
							</li>
							<li>
								<Button
									buttonFunction={() =>
										showContactUsPage("selected")
									}
									buttonStyle={style}
									buttonText={"contact us"}
								/>
								{/* <button
									onClick={() =>
										showContactUsPage("selected")
									}
									className="contact-us"
								>
									contact us
								</button> */}
							</li>
						</ul>
					</div>
					{/* END MAIN MENU */}
				</nav>
				{/* END NAV MENU */}
			</header>
		</div>
	);
}

export default Header;
