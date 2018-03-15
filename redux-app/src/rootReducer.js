import { combineReducers } from "redux";

import movies from "./movies/reducer";
import toggle from "./toggle/reducer";

const rootReducer = combineReducers( {
	movies, // ES6 for movies: movies
	toggle,
} );

export default rootReducer;