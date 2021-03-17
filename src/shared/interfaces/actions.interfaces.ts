import {catchedPokemons} from "./../../shared/interfaces/pokemon.interfaces";
import {pokemon} from "./pokemon.interfaces";
interface pokemonsAction{
	type:string;
	payload:pokemon[];
}
interface catchedPokemonAction {
	type:string;
	payload:catchedPokemons;
}
export {pokemonsAction, catchedPokemonAction};