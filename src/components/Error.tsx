import React from "react";
interface ErrorProps{
	errorCode:number;
	errorText:string;
}
function Error({errorCode,errorText}:ErrorProps):React.ReactElement{
	return (
		<div className="error">
			<div className="error__code">{errorCode}</div>
			<div className="error__text">{errorText}</div>
		</div>
	);
}
export default Error;