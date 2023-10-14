import axios from 'axios';
import { json } from 'react-router-dom';

class apiTMDB {
	static apiKey =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmJjZmRlZWY5OGYxMjRjMjRjZjViMDBhMDg2YTNhNiIsInN1YiI6IjY0OTE4MDM0YzNjODkxMDE0ZWJmNjM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WWNI_wdk3DcfU2WWrU_l2j-qg2jU-0Aidd2_YTw39MY';
	static baseUrl = 'https://api.themoviedb.org/3/';
	static baseHeaders = {
		accept: 'application/json',
		'content-type': 'application/json',
		Authorization: `Bearer ${apiTMDB.apiKey}`,
	};

	static async createRequestToken() {
		const url = apiTMDB.baseUrl + 'authentication/token/new';
		const headers = {
			accept: 'application/json',
			'content-type': 'application/json',
			Authorization: `Bearer ${apiTMDB.apiKey}`,
		};
		try {
			const response = await axios.get(url, { headers: apiTMDB.baseHeaders });
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
	static async createSessionId(request_token) {
		const url = apiTMDB.baseUrl + 'authentication/session/new';
		const body = {
			request_token,
		};

		try {
			const response = await axios.post(url, body, {
				headers: apiTMDB.baseHeaders,
			});
			return response.data;
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getListOfGenres(setListOfGenres) {
		const url = apiTMDB.baseUrl + 'genre/movie/list?language=en';
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			setListOfGenres(response.data.genres);
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getPopularMovies(page = 1, genres) {
		const genresEncode = encodeURIComponent(genres);
		const url =
			apiTMDB.baseUrl +
			`discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc${
				genres ? `&with_genres=${genresEncode}` : ''
			}`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getRatingMovies(page = 1, genres) {
		const genresEncode = encodeURIComponent(genres);
		const url =
			apiTMDB.baseUrl +
			`discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=vote_count.desc${
				!!genres ? `&with_genres=${genresEncode}` : ''
			}`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getMoviesBySearch(page = 1, search) {
		const searchEncode = encodeURIComponent(search);
		const url =
			apiTMDB.baseUrl +
			`search/movie?query=${searchEncode}&include_adult=false&language=en-US&page=${page}`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getWatchingNowMovies() {
		const url = apiTMDB.baseUrl + `trending/movie/week?language=en-US`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			return response.data.results;
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getFullFavoriteMovies(page = 1, session_id) {
		const url =
			apiTMDB.baseUrl +
			`account/20037044/favorite/movies?language=en-US&page=${page}&session_id=${session_id}`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			let maxPages;
			let favorite = response.data.results;
			if (response.data.total_pages > response.data.page) {
				const nextFavorite = await apiTMDB.getFullFavoriteMovies(
					response.data.page + 1,
					session_id,
				);
				maxPages = response.data.total_pages;
				favorite = [...favorite, ...nextFavorite.favorite];
			}
			return { favorite, maxPages };
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async deleteMovieFromFavorite(session_id, movie_id) {
		const url =
			apiTMDB.baseUrl + `account/20037044/favorite?session_id=${session_id}`;
		const body = { media_type: 'movie', media_id: movie_id, favorite: false };
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			await axios.post(url, body, options);
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async addMovieInFavorite(session_id, movie_id) {
		const url =
			apiTMDB.baseUrl + `account/20037044/favorite?session_id=${session_id}`;
		const body = { media_type: 'movie', media_id: movie_id, favorite: true };
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			await axios.post(url, body, options);
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getDetailsMovie(movieId) {
		const url = apiTMDB.baseUrl + `movie/${movieId}?language=en-US`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getCreditsMovie(movieId) {
		const url = apiTMDB.baseUrl + `movie/${movieId}/credits?language=en-US`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			const actors = response.data.cast.filter(
				(actor) => actor.known_for_department === 'Acting',
			);
			actors.sort((actor1, actor2) => actor2.popularity - actor1.popularity);
			return actors.slice(0, 10);
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
	static async getSimilarMovie(movieId) {
		const url = apiTMDB.baseUrl + `movie/${movieId}/similar?language=en-US`;
		const options = {
			headers: apiTMDB.baseHeaders,
		};
		try {
			const response = await axios.get(url, options);
			const similar = response.data.results;
			similar.sort((movie1, movie2) => movie2.popularity - movie1.popularity);
			return similar.slice(0, 10);
		} catch (error) {
			console.log(error);
			throw error.response.data;
		}
	}
}

export default apiTMDB;
