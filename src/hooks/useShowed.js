import React, { useState } from 'react';

const useShowed = () => {
	const [showed, setShowed] = useState(false);

	const switchShowed = () => setShowed((showed) => !showed);

	return { showed, switchShowed };
};

export default useShowed;
