import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  user: userReducer,
});

export default rootReducer;
