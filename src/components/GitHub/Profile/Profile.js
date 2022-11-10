import React from "react";
import "./Profile.css";

function Profile({
	ownerAvatar,
	repositoryName,
	repositoryDescription,
	starsCount,
	issuesCount,
	time,
	ownerName,
}) {
	return (
		<div className="github-profile">
			<div className="avatar-container">
				<img src={ownerAvatar} alt="avatar" />
			</div>
			<div className="profile-info">
				<h2>{repositoryName}</h2>
				<p className="repo-description">{repositoryDescription}</p>
				<div className="activity-bar">
					<div className="stars">
						<span className="in-stars">Stars:</span>
						<span>
							{Math.round((starsCount / 1000) * 10) / 10}k
						</span>
					</div>
					<div className="issues">
						<span className="in-issues">Issues:</span>
						<span>
							{Math.round((issuesCount / 1000) * 10) / 10}k
						</span>
					</div>
					{/* <p className="time-interval">
						{`Submitted ${time} ago by ${ownerName}`}
					</p> */}
				</div>
			</div>
		</div>
	);
}

export default Profile;
