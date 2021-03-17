import React from "react";
export default function onImgDownloadError(event: React.SyntheticEvent<HTMLImageElement, Event>):void {
	if(event.currentTarget.src!=="/public/pokemons/unknown.jpg"){
		event.currentTarget.src = "/public/pokemons/unknown.jpg";
	}
}