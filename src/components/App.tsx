import React,{FunctionComponent} from "react";
import Home from "./../pages/Home";
import Pokemon from "./../pages/Pokemon";
import NotFound from "./../pages/NotFound";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Collection from "../pages/Collection";
const App:FunctionComponent=()=>{
	return (
		<Router>
			<Switch>
				<Route path="/collection" exact component={Collection} />
				<Route path="/" exact component={Home} />
				<Route path="/pokemon/:id" component={Pokemon} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};
export default App;