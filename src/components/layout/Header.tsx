import React from "react";
function Header():React.ReactElement{
	return (
		<header className="header app__header">
			<div className="centerer header__inner">
				<h1 className="app-name-head header__app-name-head"><a href="/" className="header__home-link">Pokedex</a></h1>
				<nav className="app-nav header__app-nav">
					<ul className="app-nav__list">
						<li className="app-nav__element"><a className="app-nav__element-link" href="/">Main</a></li>
						<li className="app-nav__element"><a className="app-nav__element-link" href="/collection">Collection</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
export default Header;