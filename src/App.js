import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { TopBar } from "./cmps/TopBar";

// PAGES
import { Cat } from "./pages/Cat";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";

import Auth from "./pages/firebase/Auth";


function _App() {


	return (
		<div>
			<div><TopBar /></div>
			<div className="outter-container">
				<div className="inner-container">
					<Switch>
						<Route exact component={Home} path={"/"} />
						<Route exact component={Cat} path={"/category"} />
						<Route exact component={Contact} path={"/contact"} />
						<Route exact component={ProductPage} path={"/product"} />
						<Route exact component={CartPage} path={"/cart"} />
						<Route exact component={Auth} path={"/auth"} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export const App = withRouter(_App);