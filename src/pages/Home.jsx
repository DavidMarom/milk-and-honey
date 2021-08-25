import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadProducts } from '../store/actions/productActions'
import { ProdCard } from '../cmps/ProdCard'

export const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Home")) });
	useEffect(() => { dispatch(loadProducts(5)) }, [dispatch]);
	const prods = useSelector((state) => state.products.products);

	return (
		<div className="cat-page">

			<div className="ra">
				<div className="big-image"></div>
			</div>

			<div className="ra">
				<h3>LATEST PRODUCTS </h3>
			</div>

			<div className="grid">
				{(prods ?
					prods.map((prod, idx) => {
						return (<ProdCard key={idx} prod={prod} />)
					})
					:
					<h1>LOADING</h1>
				)
				}
			</div>
		</div>
	)
}