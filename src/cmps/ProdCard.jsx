import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/itemActions'

export const ProdCard = ({ prod }) => {
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.item.items);
	const user = useSelector((state) => state.user.loggedInUser);

	const doAddToCart = () => {
		dispatch(addItem(prod, cart));
	}

	const isInwhishList = () => {
		return user.wish.includes(prod.id);
	}


	return (
		<div className="prod-card">
			<NavLink to={{ pathname: "/product", state: { prod: prod } }}>
				<div className="img-container">
					<img src={prod.image} alt="product" />
				</div>

				<div className="center-element title-text">
					<h3>{prod.title}</h3>
				{(isInwhishList() ?		<div  className="on-list">♥</div>	: null	 )}
				</div>



				<div className="center-element category-text">
					<p>{prod.category}</p>
				</div>
			</NavLink>


			

			<div className="center-element category-text">
				<p>{prod.price} $</p>
			</div>

			<div className="center-element category-text">
				<button onClick={doAddToCart} className="add-to-cart"><i className="fas fa-cart-plus"></i>‏‏‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ADD TO CART</button>
			</div>


		</div>
	);
};
