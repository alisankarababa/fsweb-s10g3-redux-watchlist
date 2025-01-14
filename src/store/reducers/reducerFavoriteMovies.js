import { actionsFavoriteMovies } from "../actions/actionsFavoriteMovies";

const initialState = {
    movies: [],
}


export default function reducerFavoriteMovies(state=initialState, action) {

    switch (action.type) {
        case actionsFavoriteMovies.MOVIE_ADDED:

            if ( state.movies.find((movie) => movie.id === action.payload.id) )
                return state;

            return {
                ...state,
                movies: [...state.movies, action.payload]
            }

        case actionsFavoriteMovies.MOVIE_REMOVED:
            
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.payload)
            }

        default:
            return state;
    }
}


