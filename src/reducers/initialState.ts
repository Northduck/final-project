import {reduxStoreInterface} from "./../shared/interfaces/store.interface";
const initialState:reduxStoreInterface = {
	pokemons:{
		shownPokemons:[],
		currentPokemon:null
	},
	catchedPokemons:{},
	ui: {
		isContactFormHidden: true,
		pokemonsPerPage:20
	}
};
export default initialState;