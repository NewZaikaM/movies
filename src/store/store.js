import { configureStore } from '@reduxjs/toolkit'

import authReducer from './authSlice/authSlice'
import filtersReducer from './filtersSlice/filtersSlice'
import moviesReducer from './moviesSlice/moviesSlice'
import favoriteReducer from './favoriteSlice/favoriteSlice'
import detailsReducer from './detailsSlice/detailsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    movies: moviesReducer,
    favorite: favoriteReducer,
    details: detailsReducer,
  },
})

export default store