import { combineReducers} from "redux";
import pokemonsReducer from "./pokemonsReducer";
import uiReducer from "./uiReducer";
import catchedPokemonsReducer from "./catchedPokemonsReducer";

const rootReducer=combineReducers({
	catchedPokemons:catchedPokemonsReducer,
	pokemons: pokemonsReducer,
	ui: uiReducer,
});

export default rootReducer;