import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addItem,removeItem } from '../store/actions/itemActions'

export const CartItem = ({ prod }) => {
	const dispatch = useDispatch()

	const cart = useSelector((state) => state.item.items);

	const doAddToCart = () => { dispatch(addItem(prod, cart)); }
	const removeFromCart = () => { dispatch(removeItem(prod, cart)); }

	return (
		<div className="prod-card">
			<NavLink to={{ pathname: "/product", state: { prod: prod } }}>
				<div className="img-container">
					<img src={prod.image} alt="product" />
				</div>

				<div className="center-element title-text">
					<h3>{prod.title}</h3>
				</div>

				<div className="center-element category-text">
					<p>{prod.category}</p>
				</div>
			</NavLink>
			<div className="center-element category-text">
				<p>{prod.qty} x {prod.price} $ = {prod.qty * prod.price} $</p>
			</div>

			<div className="center-element category-text">
				<button onClick={doAddToCart} className="add-to-cart">‏‏‎‏‏‎‎‏‏‎+</button>
			</div>

			<div className="center-element category-text">
				<button onClick={removeFromCart} className="add-to-cart">‏‏‎‏‏‎‎‏‏‎-</button>
			</div>


		</div>
	);
};
