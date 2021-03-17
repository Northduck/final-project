import redux,{createStore} from "redux";  
import rootReducer from "../reducers/";  

export default function configureStore():redux.Store {  
	return createStore(rootReducer);
}

