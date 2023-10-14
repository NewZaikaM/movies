import React from 'react';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

const TitleForm = ({ title }) => {
	return (
		<>
			<Avatar sx={{ backgroundColor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<h1>
				{title}
			</h1>
		</>
	);
};

export default TitleForm;
