
export const actionsFavoriteMovies = {

    MOVIE_ADDED: "favorite-movies/movie-added",
    MOVIE_REMOVED: "favorite-movies/movie-removed"
}

export function actionFavoriteMoviesMovieAdded(movie) {
    return {type: actionsFavoriteMovies.MOVIE_ADDED, payload: movie};
}

export function actionFavoriteMoviesMovieRemoved(movieId) {
    return {type: actionsFavoriteMovies.MOVIE_REMOVED, payload: movieId};
}
