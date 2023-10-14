import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';

import { setSearch } from '../../../store/filtersSlice/filtersSlice';
import { setCurrentPage } from '../../../store/moviesSlice/moviesSlice';

import styles from './FieldSearch.module.css';

function FieldSearch() {
	const { search } = useSelector(({ filters }) => filters);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		dispatch(setCurrentPage(1));
		dispatch(setSearch(event.target.value));
	};

	return (
		<TextField
			className={styles.input}
			autoComplete="off"
			fullWidth
			type="text"
			placeholder="Search"
			value={search}
			onChange={handleChange}
			InputProps={{
				startAdornment: (
					<InputAdornment className={styles.icon} position="end">
						<SearchIcon  />
					</InputAdornment>
				),
			}}
		/>
	);
}

export default FieldSearch;
