import { Dispatch } from "redux";
import { showMorePokemons } from "../actions";
import { pokemonsAction } from "../shared/interfaces/actions.interfaces";
import { pokemon } from "../shared/interfaces/pokemon.interfaces";

export default async function loadMoreCatchedPokemons(dispatchPokemon:Dispatch<pokemonsAction>):Promise<void> {
	let rawData;
	try {
		const response=await fetch("http://localhost:3004/catchedPokemons",{
			method:"GET"
		});
		rawData= await response.json();
	} catch (error) {
		console.log(error);
		throw error;
	}
	const data=rawData as pokemon[];
	dispatchPokemon(showMorePokemons(data));
}