import React from "react";
import "./ContactForm.css";

function ContactForm() {
	return (
		<div>
			<form action="" className="form-body">
				<div className="contact-form center">
					<label htmlFor="first name" className="first-name">
						<input
							type="text"
							placeholder="First Name.."
							className="input-field"
						/>
					</label>
					<label htmlFor="Last name" className="last-name">
						<input
							type="text"
							placeholder="Last Name.."
							className="input-field"
						/>
					</label>
				</div>
				<label htmlFor="email" className="email center">
					<input type="email" name="email" id="" />
				</label>
			</form>
		</div>
	);
}

export default ContactForm;
