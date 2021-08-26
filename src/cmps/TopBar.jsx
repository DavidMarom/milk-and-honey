import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {storageService} from "../services/storageService";

export const TopBar = () => {
	const page = useSelector((state) => state.user.pageName);
	const cart = useSelector((state) => state.item.items);
	storageService.saveToStorage("items",cart);

	return (
		<div className="outter-container">
			<div className="top-bar">
				<div className="ca logo"></div>

				<div className="ca">
					<div>

						<div className={(page === 'Home' ? "active-cell" : "inactive-cell")}>
							<NavLink to={{ pathname: "/", state: { cat: "Home" } }}><p>Home</p></NavLink>
						</div>

						<div className={(page === 'Men' ? "active-cell" : "inactive-cell")}>
							<NavLink to={{ pathname: "/category", state: { cat: "Men" } }}><p>Men</p></NavLink>
						</div>

						<div className={(page === 'Women' ? "active-cell" : "inactive-cell")}>
							<NavLink activeClassName="active" to={{ pathname: "/category", state: { cat: "Women" } }}><p>Women</p></NavLink>
						</div>

						<div className={(page === 'Jewelery' ? "active-cell" : "inactive-cell")}>
							<NavLink to={{ pathname: "/category", state: { cat: "Jewelery" } }}>Jewelery</NavLink>
						</div>

						<div className={(page === 'Electronics' ? "active-cell" : "inactive-cell")}>
							<NavLink to={{ pathname: "/category", state: { cat: "Electronics" } }}>Electronics</NavLink>
						</div>

						<div className={(page === 'Contact' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/contact">Contact Us</NavLink>
						</div>

					</div>
				</div>

				<div className="ca cart">

				<div className={(page === 'Cart' ? "active-cell" : "inactive-cell")}>
							<NavLink to="/cart">CART ({cart.length})</NavLink>
						</div>

				</div>

			</div>
		</div>
	);
};
