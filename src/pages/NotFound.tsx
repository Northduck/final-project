import React from "react";
import Error from "../components/Error";
import Layout from "../components/layout/Layout";
function NotFound():React.ReactElement{
	return(
		<Layout>
			<main className="not-found">
				<div className="not-found__inner centerer">
					<Error errorCode={404} errorText={"Page not found"}/>
				</div>
			</main>
		</Layout>
	);
}
export default NotFound;