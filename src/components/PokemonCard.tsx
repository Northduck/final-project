import React from "react";
import {pokemon, catchedPokemons,catchedPokemonData} from "../shared/interfaces/pokemon.interfaces";
import { useDispatch } from "react-redux";
import {catchPokemon} from "./../actions/index";
import { Dispatch } from "redux";
import onImgDownloadError from "./../helpers/onImgDownloadError";
import { catchedPokemonAction } from "../shared/interfaces/actions.interfaces";
type PokemonListProps={
	pokemonData:pokemon;
	isCatched:boolean;
	styleName:string;
	isCollectionPage:boolean;
};
function PokemonList({pokemonData,isCatched,styleName,isCollectionPage}:PokemonListProps):React.ReactElement{
	const dispatch: Dispatch<catchedPokemonAction> = useDispatch();

	async function catchPokemonHandler() {
		const catchedPokemonData:catchedPokemonData={id:pokemonData.id,name:pokemonData.name,catchingTime:new Date().toISOString()};
		const pokemonToCatch:catchedPokemons={};
		pokemonToCatch[pokemonData.id]=catchedPokemonData;
		try {
			await fetch("http://localhost:3004/catchedPokemons",{
				method:"POST",
				headers:{
					"Content-Type": "application/json"
				},
				body:JSON.stringify(catchedPokemonData)
			});
		} catch (error) {
			console.log(error);
		}
		dispatch(catchPokemon(pokemonToCatch));
	}
	let catchPokemonBtn:React.ReactElement=<></>;
	if(isCollectionPage===false){
		catchPokemonBtn=<button className="pokemon-card__catch-button classic-btn" onClick={catchPokemonHandler} disabled={isCatched}>Catch</button>;
	}
	return (
		<li className={`pokemon-card ${styleName||""}`}>
			<div className="pokemon-card__img-wrapper">
				<img className="pokemon-card__img" src={`/public/pokemons/${pokemonData.id}.png`} alt={"pokemon image"} onError={onImgDownloadError} width="100" height="100"/>
			</div>
			<div className="pokemon-card__info">
				<h3 className="pokemon-card__name">
					<a className="pokemon-card__pokemon-link" href={`/pokemon/${pokemonData.id}`}>{pokemonData.name}</a>
				</h3>
				{catchPokemonBtn}
			</div>
		</li>
	);
}
export default PokemonList;