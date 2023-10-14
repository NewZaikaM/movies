import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setSortBy } from '../../../store/filtersSlice/filtersSlice';
import { setCurrentPage } from '../../../store/moviesSlice/moviesSlice';
import { setOfSorts } from '../../../store/filtersSlice/filtersSlice';

import styles from './FieldSort.module.css';

function FieldSort() {
	const { sortBy } = useSelector(({ filters }) => filters);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		dispatch(setCurrentPage(1));
		dispatch(setSortBy(event.target.value));
	};

	return (
		<FormControl fullWidth>
			<Select
				fullWidth
				value={sortBy}
				onChange={handleChange}
				displayEmpty
				sx={styles}
				className={styles.item}
			>
				<MenuItem value={setOfSorts.popular}>
					<em>Popular</em>
				</MenuItem>
				<MenuItem value={setOfSorts.votes}>
					<em>Votes</em>
				</MenuItem>
			</Select>
		</FormControl>
	);
}

export default FieldSort;
