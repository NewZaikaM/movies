import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Checkbox, TextField, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { setGenres } from '../../../store/filtersSlice/filtersSlice';
import { setCurrentPage } from '../../../store/moviesSlice/moviesSlice';

import styles from './FieldGenres.module.css';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const FieldGenres = ({ listOfGenres }) => {
	const { genres } = useSelector(({ filters }) => filters);
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event, newGenres) => {
		dispatch(setCurrentPage(1));
		dispatch(setGenres(newGenres));
	};
	const handleInputChange = (event, newInputValue) => {
		setInputValue(newInputValue);
	};

	return (
		<>
			<Autocomplete
				fullWidth
				multiple
				limitTags={2}
				options={listOfGenres}
				getOptionLabel={(option) => option.name}
				value={genres}
				onChange={handleChange}
				inputValue={inputValue}
				onInputChange={handleInputChange}
				renderOption={(props, option, { selected }) => (
					<li {...props}>
						<Checkbox
							icon={icon}
							checkedIcon={checkedIcon}
							checked={selected}
							className={styles.checkbox}
						/>
						<Typography className={styles.option}>{option.name}</Typography>
					</li>
				)}
				renderInput={(params) => {
					return (
						<TextField
							placeholder="Genres"
							{...params}
							className={styles.input}
						/>
					);
				}}
			></Autocomplete>
		</>
	);
};

export default FieldGenres;
