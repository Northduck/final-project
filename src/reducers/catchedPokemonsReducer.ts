import initialState from "./initialState";
import {catchedPokemonAction} from "./../shared/interfaces/actions.interfaces";
import { catchedPokemons } from "../shared/interfaces/pokemon.interfaces";
export default function pokemonReducer(state = initialState.catchedPokemons, action:catchedPokemonAction):catchedPokemons{
	switch(action.type) {
	case "CATCH_POKEMON": {
		const catchedPokemons={...state,...action.payload};
		return catchedPokemons;
	}
	case "SET_CATCHED_POKEMON": {
		return action.payload;
	}
	default: {
		return state;
	}
	}
}