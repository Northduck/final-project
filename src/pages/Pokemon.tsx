import React, { useEffect } from "react";
import Layout from "./../components/layout/Layout";
import PokemonInfo from "./../components/PokemonInfo";
import { pokemon} from "./../shared/interfaces/pokemon.interfaces";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Error from "./../components/Error";
import {reduxStoreInterface} from "./../shared/interfaces/store.interface";
import { catchedPokemonAction, pokemonsAction } from "../shared/interfaces/actions.interfaces";
import { useParams } from "react-router-dom";
import loadCurrentPokemonData from "../dataLoaders/loadCurrentPokemonData";
import loadCatchedPokemon from "../dataLoaders/loadCatchedPokemon";
function Pokemon():React.ReactElement{
	const { id } = useParams<Record<string, string | undefined>>();
	const dispatchPokemon: Dispatch<pokemonsAction> = useDispatch();
	const dispatchPokemonCatch: Dispatch<catchedPokemonAction> = useDispatch();
	const currentPokemon=useSelector((state:reduxStoreInterface):pokemon|null=>state.pokemons.currentPokemon);
	const catchedPokemons=useSelector((state:reduxStoreInterface)=>state.catchedPokemons);
	useEffect(()=>{
		(async ()=>{
			if(typeof id==="string"){
				await loadCurrentPokemonData(id,dispatchPokemon);
				await loadCatchedPokemon(id,dispatchPokemonCatch);
			}
		})();
	},[]);
	let pokemonInfo:React.ReactElement=<></>;
	if(currentPokemon){
		if(Object.keys(currentPokemon).length === 0){
			pokemonInfo=<Error errorCode={404} errorText={"Pokemon not found"}/>;
		}else{
			if(typeof id==="string"&&Number.isNaN(Number.parseInt(id))===false){
				pokemonInfo=<PokemonInfo currentPokemon={currentPokemon} catchedPokemon={catchedPokemons[Number.parseInt(id)]}/>;
			}else{
				pokemonInfo=<Error errorCode={400} errorText={"Bad params"}/>;
			}
		}
	}
	
	return (
		<Layout>
			<main className="pokemon-page">
				<div className="pokemon-page__inner centerer">
					{pokemonInfo}
				</div>
			</main>
		</Layout>
	);
}
export default Pokemon;