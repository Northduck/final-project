import {pokemon,catchedPokemons} from "./../shared/interfaces/pokemon.interfaces";
import {pokemonsAction,catchedPokemonAction} from "./../shared/interfaces/actions.interfaces";
export const showMorePokemons =(pokemons:pokemon[]):pokemonsAction => {
	return {
		type: "SHOW_MORE_POKEMONS",
		payload:pokemons
	};
};

export const catchPokemon = (pokemon:catchedPokemons):catchedPokemonAction => {
	return {
		type: "CATCH_POKEMON",
		payload: pokemon
	};
};
export const setCurrentPokemon = (pokemons:pokemon[]):pokemonsAction => {
	return {
		type: "SET_CURRENT_POKEMON",
		payload: pokemons
	};
};
export const setCatchedPokemons = (pokemons:catchedPokemons):catchedPokemonAction => {
	return {
		type: "SET_CATCHED_POKEMON",
		payload: pokemons
	};
};