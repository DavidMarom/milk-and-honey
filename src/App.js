import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

// PAGES
import { Cat } from "./pages/Cat";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";


// COMPS
import { TopBar } from "./cmps/TopBar";


function _App() {
	return (
		<div>
			<div><TopBar /></div>

				<div className="outter-container">
					<div className="inner-container">

						<div>
							<Switch>
								<Route exact component={Home} path={"/"} />
								<Route exact component={Cat} path={"/category"} />
								<Route exact component={Contact} path={"/contact"} />
							</Switch>
						</div>

					</div>


				</div>
		</div>
	);
}

export const App = connect(null, null)(withRouter(_App));