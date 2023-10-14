import React from 'react';
import { Pagination } from '@mui/material';

import styles from './PaginationMovies.module.css';

const PaginationMovies = ({currentPage, maxPages, onChange}) => {
	return (
		<div>
			<Pagination
				size="large"
				className={styles.paginationBig}
				count={maxPages}
				color="primary"
				hidePrevButton
				hideNextButton
				page={currentPage}
				onChange={onChange}
			/>
			<Pagination
				size="small"
				className={styles.paginationSmall}
				count={maxPages}
				color="primary"
				hidePrevButton
				hideNextButton
				page={currentPage}
				onChange={onChange}
			/>
		</div>
	);
};

export default PaginationMovies;
