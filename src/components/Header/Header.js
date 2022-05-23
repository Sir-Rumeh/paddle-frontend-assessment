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

	var callOne = true;

	function showContactUsPage() {
		const contactUsPage = document.querySelector(
			".contact-us-page-component"
		);
		contactUsPage.classList.toggle("show-contact-us-page");
	}

	function toggleMuenu() {
		if (callOne) openMenu();
		else closeMenu();
		callOne = !callOne;
	}

	function openMenu() {
		if (window.innerWidth <= 768) {
			const navBar = document.querySelector(".navbar");
			const navMenu = document.querySelector(".main-menu");
			console.log("opened");
			console.log(navMenu);
			navBar.style.backgroundColor = "white";
			navMenu.style.height = "80%";
		}
	}

	function closeMenu() {
		if (window.innerWidth <= 768) {
			const navBar = document.querySelector(".navbar");
			const navMenu = document.querySelector(".main-menu");
			console.log("closed");
			navBar.style.backgroundColor = "transparent";
			navMenu.style.height = "0";
		}
	}

	return (
		<div>
			<header className="header">
				{/* START NAV MENU */}
				<nav className="navbar ">
					<div className="logo">
						<a href="/">
							<img src={logo} alt="metricks logo" />
						</a>
						<h4 className="logo-text">METRICKS</h4>
					</div>
					<div
						onClick={() => toggleMuenu()}
						className="close-menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
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
