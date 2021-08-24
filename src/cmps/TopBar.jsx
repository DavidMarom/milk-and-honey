import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export const TopBar = () => {
	const pageName = useSelector((state) => state.user.pageName);


	return (
		<div className="outter-container">
			{/* <div className="inner-container"> */}
			<div className="top-bar">
				<div className="ca">LOGO</div>

				<div className="ca">
					<div>

						<div className={(pageName === 'authors' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/authors">Authors</NavLink>
						</div>

						<div className={(pageName === 'books' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/">Books</NavLink>
						</div>

						<div className={(pageName === 'books' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/">Books</NavLink>
						</div>

						<div className={(pageName === 'tasks' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/tasks">Contact Us</NavLink>
						</div>

					</div>
				</div>

				<div className="ca"><p>CART</p></div>

			</div>
			{/* </div> */}
		</div>
	);
};
