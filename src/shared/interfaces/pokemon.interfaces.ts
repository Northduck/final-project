export interface catchedPokemonData {
	id:number;
	name:string;
	catchingTime:string;
}
export interface catchedPokemons{
	[key: number]: catchedPokemonData;
}
export interface pokemon{
	id:number;
	name:string;
}