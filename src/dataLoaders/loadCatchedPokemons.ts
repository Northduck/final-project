import { Dispatch } from "redux";
import { catchedPokemonAction } from "../shared/interfaces/actions.interfaces";
import { catchedPokemonData, catchedPokemons } from "../shared/interfaces/pokemon.interfaces";
import {setCatchedPokemons} from "./../actions/index";
export default async function loadCatchedPokemons(dispatchPokemonCatch:Dispatch<catchedPokemonAction>):Promise<void> {
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
	const data=rawData as catchedPokemonData[];
	const obj: catchedPokemons= {};
	data.forEach((pokemon)=>{
		obj[pokemon.id]={name:pokemon.name,id:pokemon.id,catchingTime:pokemon.catchingTime};
	});
	dispatchPokemonCatch(setCatchedPokemons(obj));
}