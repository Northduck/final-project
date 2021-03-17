import React from "react";
import { catchedPokemonData, pokemon } from "../shared/interfaces/pokemon.interfaces";
import onImgDownloadError from "./../helpers/onImgDownloadError";
interface PokemonInfoPropsInterface{
	currentPokemon:pokemon
	catchedPokemon:catchedPokemonData;
}
const monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];

function PokemonInfo({currentPokemon, catchedPokemon}:PokemonInfoPropsInterface):React.ReactElement{
	let catchePokemonInfo:React.ReactElement;
	if(catchedPokemon!==undefined){
		const catchingTime=new Date(catchedPokemon.catchingTime);
		catchePokemonInfo=(
			<>
				<li className="pokemon__info-line">
					<h3 className="pokemon__line-head">Pokemon status:</h3>
					<p className="pokemon__line-content">Pokemon is catched</p>
				</li>
				<li className="pokemon__info-line">
					<h3 className="pokemon__line-head">Catched on:</h3>
					<p className="pokemon__line-content">{`${catchingTime.getDate()<=9?"0"+catchingTime.getDate():catchingTime.getDate()} `+monthArray[catchingTime.getMonth()]+`, ${catchingTime.getHours()<=9?"0"+catchingTime.getHours():catchingTime.getHours()}:${catchingTime.getMinutes()<=9?"0"+catchingTime.getMinutes():catchingTime.getMinutes()}`}</p>
				</li>
			</>
		);
	}else{
		catchePokemonInfo=(
			<li className="pokemon__info-line">
				<h3 className="pokemon__line-head">Pokemon status:</h3>
				<p className="pokemon__line-content">Pokemon isn&apos;t catched</p>
			</li>
		);
	}
	return(
		<div className="pokemon">
			<h2 className="pokemon__name-head">{currentPokemon.name}</h2>
			<div className="pokemon__content">
				<div className="pokemon__image-wrapper">
					<img className="pokemon__image" src={`/public/pokemons/${currentPokemon.id}.png`} alt={"pokemon image"} onError={onImgDownloadError} width="475" height="475"/>
				</div>
				<ul className="pokemon__info-list">
					<li className="pokemon__info-line">
						<h3 className="pokemon__line-head">Pokemon id:</h3>
						<p className="pokemon__line-content">{currentPokemon.id}</p>
					</li>
					{catchePokemonInfo}
				</ul>
			</div>
		</div>
	);
}
export default PokemonInfo;