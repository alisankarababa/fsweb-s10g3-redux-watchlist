import { combineReducers } from 'redux';

import reducerFavoriteMovies from "./reducerFavoriteMovies"

export const reducers = combineReducers({
    favoriteMovies: reducerFavoriteMovies
})





