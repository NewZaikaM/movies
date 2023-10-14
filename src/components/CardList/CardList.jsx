import React from 'react';

import CardMovie from './../CardMovie/CardMovie';

import styles from './CardList.module.css'

const CardList = ({ list = [], withButton }) => {
	return (
		<div className={styles.content}>
			{list.map((movie) => (
				<CardMovie key={movie?.id} dataOfMovie={movie} withCloseButton={withButton} />
			))}
		</div>
	);
};

export default CardList;
