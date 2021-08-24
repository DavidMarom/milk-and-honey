import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export const TopBar = () => {
	const pageName = useSelector((state) => state.user.pageName);


	return (
		<div className="outter-container">
			{/* <div className="inner-container"> */}
			<div className="top-bar">
				<div className="ca logo"></div>

				<div className="ca">
					<div>

						<div className={(pageName === 'home' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/">Home</NavLink>
						</div>

						<div className={(pageName === 'men' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/category">Men</NavLink>
						</div>

						<div className={(pageName === 'women' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/category">Women</NavLink>
						</div>

						<div className={(pageName === 'jewelery' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/category">Jewelery</NavLink>
						</div>
						
						<div className={(pageName === 'electronics' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/category">Electronics</NavLink>
						</div>

						<div className={(pageName === 'contact' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/contact">Contact Us</NavLink>
						</div>

					</div>
				</div>

				<div className="ca cart"><p>CART</p></div>

			</div>
			{/* </div> */}
		</div>
	);
};
