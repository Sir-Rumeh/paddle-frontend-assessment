import React from "react";
import "./ContactForm.css";

function ContactForm() {
	return (
		<div>
			<form action="" className="form-body">
				<div className="contact-form center">
					<div className="names-form ">
						<label
							htmlFor="first name"
							className="first-name mobile-width"
						>
							<input
								type="text"
								placeholder="First Name.."
								className="input-field"
							/>
						</label>
						<label
							htmlFor="Last name"
							className="last-name mobile-width"
						>
							<input
								type="text"
								placeholder="Last Name.."
								className="input-field"
							/>
						</label>
					</div>

					<label
						htmlFor="email"
						className="email center mobile-width"
					>
						<input
							type="email"
							name="email"
							id=""
							placeholder="Enter email to subscribe"
						/>
						<div className="subscribe">
							<h3>Subscribe</h3>
						</div>
					</label>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
