import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CardPhoto from './../CardPhoto/CardPhoto';

import styles from './SliderPhotos.module.css';
import { Typography } from '@mui/material';

const SliderPhotos = ({ photos = [], titleSlider, movies }) => {
	const { userId } = useParams();
	const navigate = useNavigate();

	return (
		<>
			<Typography variant="h2" className={styles.titleSlider}>
				{titleSlider}
			</Typography>
			<div className={styles.slider}>
				{photos.map((photo) => {
					let src;
					let title;
					let handleClick = () => {};
					if (movies) {
						src = photo.poster_path;
						title = photo.title;
						handleClick = () => {
							navigate(`/user/${userId}/movie/${photo.id}`);
						};
					} else {
						src = photo.profile_path;
						title = photo.name;
					}
					return (
						<CardPhoto
							key={photo.id}
							photo={photo}
							src={src}
							title={title}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
		</>
	);
};

export default SliderPhotos;
