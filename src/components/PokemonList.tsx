import React from "react";
import PokemonCard from "./PokemonCard";
import {catchedPokemons, pokemon} from "../shared/interfaces/pokemon.interfaces";
import { useDispatch, useSelector} from "react-redux";
import {reduxStoreInterface} from "./../shared/interfaces/store.interface";
import loadMorePokemons from "./../dataLoaders/loadMorePokemons";
import { pokemonsAction } from "../shared/interfaces/actions.interfaces";
import { Dispatch } from "redux";
type PokemonListProps={
	pokemonsContent:Array<pokemon>;
	catchedPokemons:catchedPokemons;
	isCollectionPage:boolean;
	emptyListText:string;
};
function PokemonList({pokemonsContent,catchedPokemons,isCollectionPage,emptyListText}:PokemonListProps):React.ReactElement{
	const dispatchPokemon: Dispatch<pokemonsAction> = useDispatch();
	const pokemonsPerLoad=useSelector((state:reduxStoreInterface):number=>state.ui.pokemonsPerPage);
	function loadMorePokemonsForPage(){
		loadMorePokemons(pokemonsContent.length,pokemonsContent.length+pokemonsPerLoad,dispatchPokemon);
	}
	const pokemonsCards:Array<React.ReactElement>=[];
	let pokemonsContentElement:React.ReactElement;
	if(pokemonsContent.length!==0){
		for(let i=0;i<pokemonsContent.length;i++){
			pokemonsCards.push(
				<PokemonCard 
					pokemonData={pokemonsContent[i]}
					key={i+1}
					isCatched={isCollectionPage||catchedPokemons[pokemonsContent[i].id]!==undefined}
					isCollectionPage={isCollectionPage}
					styleName="pokemon-list__pokemon-card"
				/>
			);
		}
		pokemonsContentElement=(
			<>
				{pokemonsCards}
			</>
		);
	}else{
		pokemonsContentElement=(
			<p className="empty-list-explanation">
				{emptyListText}
			</p>
		);
	}
	
	let loadMoreBtn=<button className="pokemons-content__load-more-btn classic-btn" onClick={loadMorePokemonsForPage}>load more</button>;
	if(isCollectionPage===true){
		loadMoreBtn=<></>;
	}
	return (
		<div className="pokemons-content">
			<ul className="pokemon-list">
				{pokemonsContentElement}
			</ul>
			{loadMoreBtn}
		</div>
	);
}
export default PokemonList;