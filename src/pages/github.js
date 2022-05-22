import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/GitHub/Header/Header";
import Profile from "../components/GitHub/Profile/Profile";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";

function Github() {
	const initialState = {
		page: 1,
		results: [],
		total_pages: 0,
		total_results: 0,
	};

	const url = `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${initialState.page}`;

	const [repository, setRepository] = useState(null);
	const [loading, setLoading] = useState(true);
	// const [state, setState] = useState(initialState);

	useEffect(() => {
		axios.get(
			`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${initialState.page}`
		).then((response) => {
			setRepository(response.data.items);
			console.log(response.data);
			setLoading(false);
		});
	}, [url, initialState.page]);

	function loadMore() {
		setLoading(true);
		initialState.page = initialState.page + 1;
		axios.get(
			`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${initialState.page}`
		).then((response) => {
			setRepository(response.data.items);
			console.log(response.data);
			setLoading(false);
		});
		console.log(loading);
	}

	if (loading) {
		return (
			<div className="loading">
				<Header />
				<div className="loading-spinner"></div>
			</div>
		);
	} else if (!loading) {
		return (
			<div className="github">
				<Header />
				<div>
					{repository.map((repo) => {
						const {
							name,
							owner,
							description,
							stargazers_count,
							open_issues_count,
							pushed_at,
						} = repo;
						return (
							<Profile
								repositoryName={name}
								ownerAvatar={owner.avatar_url}
								repositoryDescription={description}
								starsCount={stargazers_count}
								issuesCount={open_issues_count}
								time={pushed_at}
								ownerName={owner.login}
							/>
						);
					})}
					<LoadMoreButton callback={() => loadMore} />
				</div>
			</div>
		);
	}
}

export default Github;
