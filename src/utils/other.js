function zeroToHundred(setProgress) {
	const timer = setInterval(() => {
		setProgress((prevProgress) => {
			const newProgress = prevProgress + 1;
			if (newProgress >= 100) {
				clearInterval(timer);
			}
			return newProgress;
		});
	}, 100);
	return () => {
		clearInterval(timer);
	};
}

function scrollToTop() {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function connectWithComma(list) {
	if (list?.length) {
		return list?.map((item) => item.name).join(', ');
	}
}

function getFavoriteForMovieDetails(setOfFavorite, details) {
	return setOfFavorite.find((favorite) => favorite.id === details.id);
}

function getPartOfListOfFavorite(setOfFavorite, currentPage) {
	return setOfFavorite.slice(0 + 20 * (currentPage - 1), 20 * currentPage);
}

function isShowedWatchingNow( search, genres ) {
	return search === '' && genres.length === 0;
}

export {
	zeroToHundred,
	scrollToTop,
	connectWithComma,
	getFavoriteForMovieDetails,
	getPartOfListOfFavorite,
	isShowedWatchingNow
};
