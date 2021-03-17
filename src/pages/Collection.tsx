import React, { useEffect } from "react";
import Layout from "./../components/layout/Layout";
import PokemonList from "./../components/PokemonList";
import { pokemon } from "./../shared/interfaces/pokemon.interfaces";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {reduxStoreInterface} from "./../shared/interfaces/store.interface";
import { pokemonsAction } from "../shared/interfaces/actions.interfaces";
import loadMoreCatchedPokemons from "../dataLoaders/loadMoreCatchedPokemons";
function Home():React.ReactElement{
	const dispatchPokemon: Dispatch<pokemonsAction> = useDispatch();
	const pokemonsData=useSelector((state:reduxStoreInterface):pokemon[]=>state.pokemons.shownPokemons);
	useEffect(()=>{
		(async ()=>{
			await loadMoreCatchedPokemons(dispatchPokemon);
		})();
	},[]);
	return (
		<Layout>
			<main className="collection">
				<div className="collection__inner centerer--small">
					<h2 className="collection__header">Catched pokemons</h2>
					<PokemonList 
						pokemonsContent={pokemonsData} 
						catchedPokemons={{}} 
						isCollectionPage={true} 
						emptyListText="There are no catched pokemons"
					/>
				</div>
			</main>
		</Layout>
	);
}
export default Home;