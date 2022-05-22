import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
	return (
		<Fragment>
			<section className="timer-container">
				<section className="clock">
					<p>{timerDays}</p>
					<small>Days</small>
				</section>
				<section className="clock">
					<p>{timerHours}</p>
					<small>Hours</small>
				</section>{" "}
				<section className="clock">
					<p>{timerMinutes}</p>
					<small>Minutes</small>
				</section>{" "}
				<section className="clock">
					<p>{timerSeconds}</p>
					<small>Seconds</small>
				</section>
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	timerDays: 10,
	timerHours: 10,
	timerMinutes: 10,
	timerSeconds: 10,
};

export default Clock;
