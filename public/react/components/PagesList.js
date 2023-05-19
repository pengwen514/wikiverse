import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages}) => {
	return (
			<ul>
			{pages.map((page) => (
					<li key={page.id}>
					<Page page={page}/>
				</li>
			))}
			</ul>
	)
} 


