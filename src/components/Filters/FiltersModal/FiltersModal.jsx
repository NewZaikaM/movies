import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import FieldSearch from '../../Fields/FieldSearch/FieldSearch';
import FieldSort from '../../Fields/FieldSort/FieldSort';
import FieldGenres from '../../Fields/FieldGenres/FieldGenres';

import styles from './FiltersModal.module.css';

function FiltersModal({ isWithSearch, handleReset, listOfGenres }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button size="large" variant="outlined" onClick={handleOpen}>
				Filters
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box className={styles.modal}>
					{isWithSearch && <FieldSearch />}
					<h3>Filters</h3>
					<FieldSort />
					<FieldGenres listOfGenres={listOfGenres} />
					<Button onClick={handleReset} size="large" variant="text">
						Reset
					</Button>
				</Box>
			</Modal>
		</>
	);
}

export default FiltersModal;
