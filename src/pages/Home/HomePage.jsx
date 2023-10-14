import React from 'react';

import CardList from '../../components/CardList/CardList';
import SliderPhotos from '../../components/SliderPhotos/SliderPhotos';
import PaginationMovies from '../../components/PaginationMovies/PaginationMovies';

import useHome from '../../hooks/useHome';
import { isShowedWatchingNow } from '../../utils/other';

import styles from './HomePage.module.css';

const HomePage = () => {
	const [
		{ search, _, genres },
		{ watchingNow, setOfMovies, pending },
		{ currentPage, maxPages },
		handleChange,
	] = useHome();

	return (
		<div className={styles.home}>
			{pending ? (
				<div></div>
			) : (
				<>
					{isShowedWatchingNow(search, genres) && (
						<SliderPhotos
							photos={watchingNow}
							titleSlider={'Watching now'}
							movies
						/>
					)}
					<CardList list={setOfMovies} />
				</>
			)}
			<PaginationMovies
				currentPage={currentPage}
				maxPages={maxPages}
				onChange={handleChange}
			/>
		</div>
	);
};

export default HomePage;
