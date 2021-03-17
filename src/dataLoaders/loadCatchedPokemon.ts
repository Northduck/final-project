import { Dispatch } from "redux";
import { setCatchedPokemons } from "../actions";
import { catchedPokemonAction } from "../shared/interfaces/actions.interfaces";
import { catchedPokemonData, catchedPokemons } from "../shared/interfaces/pokemon.interfaces";

export default async function loadCatchedPokemon(id:string,dispatchPokemonCatch:Dispatch<catchedPokemonAction>):Promise<void> {
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
	const pokemonId=Number.parseInt(id);
	for(let i=0;i<data.length;i++){
		if(data[i].id===pokemonId){
			obj[data[i].id]={name:data[i].name,id:data[i].id,catchingTime:data[i].catchingTime};
			break;
		}
	}
	dispatchPokemonCatch(setCatchedPokemons(obj));
}