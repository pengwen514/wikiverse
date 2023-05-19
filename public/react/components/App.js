import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	


	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
	<h4>Search</h4>
	<h4>User</h4>
      <h1>Welcome to WikiVerse</h1>
			<h2>Article List</h2>
			<PagesList pages={pages}/>
			<button>Sign Up for Wikiverse</button>
			<button>Submit an Article</button>
		</main>
	)}
