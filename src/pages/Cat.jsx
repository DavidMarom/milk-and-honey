import React, { useEffect } from 'react'
import { setPageName } from '../store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductsOfCategory } from '../store/actions/productActions'
import { ProdCard } from '../cmps/ProdCard'
import { utils } from '../services/utils'

export const Cat = ({ location }) => {

	const dispatch = useDispatch()
	let apiCatName = utils.getApiCatNameByTitle(location.state.cat);

	useEffect(() => { dispatch(setPageName(location.state.cat)); });
	useEffect(() => { dispatch(loadProductsOfCategory(apiCatName)) }, [apiCatName,dispatch]);


	const prods = useSelector((state) => state.products.products);

	return (
		<div className="cat-page">

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
