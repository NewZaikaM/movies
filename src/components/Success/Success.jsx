import React from 'react';
import Loader from './../Loader/Loader';

const Success = () => {
	return (
		<>
			<h3>Registration was successful!</h3>
			<h4>After several seconds you will be redirected to the main page.</h4>
      <Loader />
		</>
	);
};

export default Success;
