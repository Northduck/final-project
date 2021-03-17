import React, { useEffect } from "react";
import Layout from "./../components/layout/Layout";
import PokemonList from "./../components/PokemonList";
import { pokemon} from "./../shared/interfaces/pokemon.interfaces";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {reduxStoreInterface} from "./../shared/interfaces/store.interface";
import { catchedPokemonAction, pokemonsAction } from "../shared/interfaces/actions.interfaces";
import loadCatchedPokemons from "./../dataLoaders/loadCatchedPokemons";
import loadMorePokemons from "./../dataLoaders/loadMorePokemons";
function Home():React.ReactElement{
	const dispatchPokemon: Dispatch<pokemonsAction> = useDispatch();
	const dispatchPokemonCatch: Dispatch<catchedPokemonAction> = useDispatch();
	const pokemonsData=useSelector((state:reduxStoreInterface):pokemon[]=>state.pokemons.shownPokemons);
	const catchedPokemons=useSelector((state:reduxStoreInterface)=>state.catchedPokemons);
	const pokemonsPerLoad=useSelector((state:reduxStoreInterface):number=>state.ui.pokemonsPerPage);
	useEffect(()=>{
		(async ()=>{
			await loadMorePokemons(0,pokemonsPerLoad,dispatchPokemon);
			await loadCatchedPokemons(dispatchPokemonCatch);
		})();
	},[]);
	return (
		<Layout>
			<main className="home">
				<div className="home__inner centerer--small">
					<h2 className="home__header">Pokemons</h2>
					<PokemonList 
						pokemonsContent={pokemonsData} 
						catchedPokemons={catchedPokemons} 
						isCollectionPage={false} 
						emptyListText="There are no pokemons"
					/>
				</div>
			</main>
		</Layout>
	);
}
export default Home;