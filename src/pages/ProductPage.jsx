import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadProducts } from '../store/actions/productActions'

export const ProductPage = ({ location }) => {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Home")) });
	useEffect(() => { dispatch(loadProducts(5)) }, [dispatch]);

	const product = location.state.prod;
	console.log(product);


	return (
		<div className="product-page">

			<div className="ppage-right-side">
				<div className="bigImg-container">

					<img src={product.image} />
				</div>


			</div>


			<div className="ppage-left-side">

				<h1>{product.title}</h1>
				<h2>{product.category}</h2>
				<p>{product.description}</p>
				<h3>{product.price}</h3>

				<div className="add-to-cart2">ADD TO CART</div>	

			</div>

		</div>
	)
}