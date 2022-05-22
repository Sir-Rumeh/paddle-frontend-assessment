import React from "react";
import "./WhyUs.css";
import DotEffect from "../DotEffect/DotEffect";
import GotAQuestion from "../GotAQuestion/GotAQuestion";

function WhyUs() {
	return (
		<div className="container">
			<div className="good-value">
				<div>
					Metricks was developed because just like you, we needed
					a product that could give us a <span>good value.</span>
				</div>
			</div>
			<div className="why-us-wrapper border-top">
				<div className="insight-why-us">
					<div className="question-header">
						<div className="number first-number">01</div>
						<h3 className="">WHY US?</h3>
					</div>
					<div className="why">
						<h4>
							We pride ourselves In our ability to innovate
							and create World class tools that provrde
							rericlble and efficient touchpornts between
							advertisers and affiliates.
						</h4>
					</div>
					<DotEffect />
				</div>
				<div className="insight-growing-with-you">
					<div className="overlay">
						<div className="growing-with-you-article">
							<div className="question-header second-question-header">
								<div className="number second-number">
									02
								</div>
								<h3 className="">GROWING WITH YOU</h3>
							</div>
							<h4 className="grow-down">
								Leverciging the best technoiogy, we have
								deveioped on one affiliate marketing
								tracking softwc1re,c1 genius tool to
								heip you track, automate and optimize
								your inﬂuencer campaigns, oii from one
								dashboard.
							</h4>
							<br />
							<h4>
								Our team of experts ore constantly
								brainstorming, testing ond developing
								new solutions with only one mung in mind
								e your business growth. Your success iS
								our success and by giving you the loois
								you need to scoie, we grow us well.
							</h4>
						</div>
					</div>

					<div className="growing-with-you">
						<div className="background-efffect"></div>
					</div>
				</div>
			</div>
			<GotAQuestion
				questionTitle={"Got a Question?"}
				description={
					"See how Metricks can help your business grow with best affiliate marketting tracking software"
				}
			/>
		</div>
	);
}

export default WhyUs;
