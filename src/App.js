import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";

import { movies } from "./movies";
import { useSelector, useDispatch } from "react-redux";
import { actionFavoriteMoviesMovieAdded } from "./store/actions/actionsFavoriteMovies";


function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector( store  => store.favoriteMovies.movies);
    const dispatch = useDispatch();

    function incrementSira() {

      if ( sira === movies.length - 1 )
          setSira(0);
      else
          setSira(sira + 1);
    }

    function decrementSira () {
        if ( sira === 0 )
            setSira(movies.length - 1);
        else
            setSira(sira - 1);
    }

    function hAddToFavoriteMovies() {
        dispatch(actionFavoriteMoviesMovieAdded(movies[sira]));
    }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            {
                sira !== 0 &&
            <button
              onClick={() => setSira(0)}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa Dön
            </button>
            }
            <button
              onClick={decrementSira}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={incrementSira}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sonraki
            </button>
            
            
            <button onClick={hAddToFavoriteMovies} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
