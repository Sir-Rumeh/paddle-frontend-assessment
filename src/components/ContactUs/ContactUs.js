import React from "react";
import "./ContactUs.css";

function ContactUs() {
	function hideContactUsPage() {
		const namesForm = document.querySelector(".names-form");
		const emailUp = document.querySelector(".email");

		const shownContactUsPage = document.querySelector(
			".contact-us-page-component"
		);
		shownContactUsPage.classList.toggle("show-contact-us-page");
		if (!namesForm.classList.contains("vanish")) {
			return;
		} else {
			namesForm.classList.remove("vanish");
			emailUp.classList.remove("translate-up");
		}
	}

	return (
		<div className="contact-us-page-component">
			<button
				onClick={() => hideContactUsPage()}
				className="back-to-home-support-button"
			>
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
			</button>
			<div className="contact-us-page-effect"></div>

			<div className="contact-us-container">
				<div className="blur">
					<button className="back-to-home">
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
					</button>
				</div>
				<div className="contact-us-page-form">
					<div className="title-wrapper">
						<div className="title-description margin-top">
							Hey, we are still in the works,
						</div>
						<div className="title-description">
							but you can send us a message!
						</div>
					</div>
					<div className="overall-form">
						<form action="" className="form-field">
							<label
								htmlFor="First Name"
								className="form-label"
							>
								First name
							</label>
							<input
								className="option-field"
								type="text"
								placeholder="Enter Your First Name"
							/>
							<label
								htmlFor="Last Name"
								className="form-label"
							>
								Last name
							</label>
							<input
								className="option-field"
								type="text"
								placeholder="Enter Your Last Name"
							/>
							<label
								htmlFor="Email"
								className="form-label"
							>
								Email address
							</label>
							<input
								className="option-field"
								type="email"
								placeholder="Enter Your Email Address"
							/>
							<label htmlFor="Help" className="form-label">
								Tell Us What You Need Help With
							</label>
							<textarea
								name="Help"
								id=""
								cols="30"
								rows="10"
								className="option-field text-area"
								placeholder='Enter A Topic, Like "Channel Problem..."'
							></textarea>
							<div className="button-container">
								<button
									type="submit"
									className="send-now-button"
								>
									SEND NOW
								</button>
							</div>
						</form>
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
