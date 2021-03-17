import initialState from "./initialState";
import {uiStoreInterface} from "./../shared/interfaces/store.interface";
export default function uiReducer(state = initialState.ui):uiStoreInterface {
	return state;
}
