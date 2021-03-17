import { Dispatch } from "redux";
import { pokemonsAction } from "../shared/interfaces/actions.interfaces";
import { pokemon } from "../shared/interfaces/pokemon.interfaces";
import {showMorePokemons} from "./../actions/index";
export default async function loadMorePokemons(start:number,end:number,dispatchPokemon:Dispatch<pokemonsAction>):Promise<void> {
	let rawData;
	try {
		const response=await fetch(`http://localhost:3004/pokemons/?_start=${start}&_end=${end}`,{
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