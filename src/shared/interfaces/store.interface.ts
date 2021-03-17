import { pokemon,catchedPokemons } from "./pokemon.interfaces";
interface uiStoreInterface{
	isContactFormHidden:boolean;
	pokemonsPerPage:number;
}
interface pokemonsStoreInterface{
	shownPokemons:pokemon[];
	currentPokemon:pokemon | null
}
interface reduxStoreInterface{
	pokemons:pokemonsStoreInterface;
	catchedPokemons:catchedPokemons;
	ui:uiStoreInterface;
}
export {uiStoreInterface,pokemonsStoreInterface,reduxStoreInterface};