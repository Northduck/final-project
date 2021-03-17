import { Dispatch } from "redux";
import { setCurrentPokemon } from "../actions";
import { pokemonsAction } from "../shared/interfaces/actions.interfaces";
import { pokemon } from "../shared/interfaces/pokemon.interfaces";
export default async function loadCurrentPokemonData(id:string,dispatchPokemon: Dispatch<pokemonsAction>):Promise<void> {
	let rawData;
	try {
		const response=await fetch(`http://localhost:3004/pokemons/${id}`,{
			method:"GET"
		});
		rawData= await response.json();
	} catch (error) {
		console.log(error);
		throw error;
	}
	const data=rawData as pokemon;
	dispatchPokemon(setCurrentPokemon([data]));
}