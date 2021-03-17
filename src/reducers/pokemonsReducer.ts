import initialState from "./initialState";
import {pokemonsAction} from "./../shared/interfaces/actions.interfaces";
import {pokemonsStoreInterface} from "./../shared/interfaces/store.interface";
export default function pokemonReducer(state = initialState.pokemons, action:pokemonsAction):pokemonsStoreInterface{
	switch(action.type) {
	case "SHOW_MORE_POKEMONS": {
		return {
			...state,
			shownPokemons: [...state.shownPokemons,...action.payload]
		};
	}
	case "SET_CURRENT_POKEMON": {
		return {
			...state,
			currentPokemon: action.payload[0]
		};
	}
	default: {
		return state;
	}
	}
}