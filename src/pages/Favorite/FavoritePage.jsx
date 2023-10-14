import React from 'react';

import CardList from '../../components/CardList/CardList';
import PaginationMovies from '../../components/PaginationMovies/PaginationMovies';

import useFavorite from '../../hooks/useFavorite';
import { getPartOfListOfFavorite } from '../../utils/other';

import styles from './FavoritePage.module.css';

const FavoritePage = () => {
	const [{ setOfFavorite, pending }, { currentPage, maxPages }, handleChange] =
		useFavorite();
	return (
		<div className={styles.favorite}>
			{pending ? (
				<div></div>
			) : (
				<CardList
					list={getPartOfListOfFavorite(setOfFavorite, currentPage)}
					withButton
				/>
			)}
			<PaginationMovies
				currentPage={currentPage}
				maxPages={maxPages}
				onChange={handleChange}
			/>
		</div>
	);
};

export default FavoritePage;
