import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import FieldSearch from '../Fields/FieldSearch/FieldSearch';
import FieldSort from '../Fields/FieldSort/FieldSort';
import FieldGenres from '../Fields/FieldGenres/FieldGenres';
import TwoActions from '../TwoActions/TwoActions';
import FiltersModal from './FiltersModal/FiltersModal';

import { resetFilters } from '../../store/filtersSlice/filtersSlice';

import styles from './Filters.module.css';
import apiTMDB from '../../api/api';

const Filters = () => {
	const dispatch = useDispatch();
	const [listOfGenres, setListOfGenres] = useState([]);

	useEffect(() => {
		apiTMDB.getListOfGenres(setListOfGenres);
	}, []);

	const handleReset = () => {
		dispatch(resetFilters());
	};
	return (
		<>
			<div className={styles.filters}>
				<FieldSearch />
				<h3 className={styles.title}>Filters</h3>
				<FieldSort />
				<FieldGenres listOfGenres={listOfGenres} />
				<Button onClick={handleReset} size="large" variant="text">
					Reset
				</Button>
			</div>
			<div className={styles.filtersModalTablet}>
				<FieldSearch />
				<FiltersModal
					isWithSearch={false}
					handleReset={handleReset}
					listOfGenres={listOfGenres}
				/>
			</div>
			<div className={styles.filtersModalMobile}>
				<FiltersModal
					isWithSearch
					handleReset={handleReset}
					listOfGenres={listOfGenres}
				/>
			</div>
		</>
	);
};

export default Filters;
