import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadProducts } from '../store/actions/productActions'
import { addItem } from '../store/actions/itemActions'
import { wishOff, wishOn } from '../store/actions/userActions'

export const ProductPage = ({ location }) => {
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.item.items);
	const user = useSelector((state) => state.user.loggedInUser);

	useEffect(() => { dispatch(setPageName("Home")) });
	useEffect(() => { dispatch(loadProducts(5)) }, [dispatch]);

	const product = location.state.prod;
	const doAddToCart = () => {
		dispatch(addItem(product, cart));
	}

	const isInwhishList = () => {
		return user.wish.includes(product.id);
	}

	const doWishOn = () => {
			dispatch(wishOn(product.id));
		}
		
		const doWishOff = () => {
			dispatch(wishOff(product.id));
	}

	return (
		<div className="product-page">

			<div className="ppage-right-side">
				<div className="bigImg-container">
					<img src={product.image} alt="logo" />
				</div>
			</div>

			<div className="ppage-left-side">


				<h1>{product.title}</h1>

				{(isInwhishList() ?
					<div onClick={doWishOff} className="on-list">♥</div>
					:
					 <div onClick={doWishOn} className="add-to-list">Add to whish-list</div>
					 )}

				<h2>{product.category}</h2>
				<p>{product.description}</p>
				<h3>{product.price}</h3>

				<div onClick={doAddToCart} className="add-to-cart2">ADD TO CART</div>

			</div>

		</div>
	)
}