import React from "react";
import Header from "./Header";
import Footer from "./Footer";
interface LayoutProps{
	children: React.ReactElement
}
function Layout({children}:LayoutProps):React.ReactElement{
	return (
		<>
			<Header/>
			{children}
			<Footer/>
		</>
	);
}
export default Layout;