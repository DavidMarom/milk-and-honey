import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { CartItem } from '../cmps/CartItem'

export const CartPage = () => {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Cart")) });

	const cart = useSelector((state) => state.item.items);

	console.log(cart);

	return (
			<div className="grid">
				{(cart ?
					cart.map((prod, idx) => {
						return (<CartItem key={idx} prod={prod} />)
					})
					:
					<h1>LOADING</h1>
				)
				}
			</div>
	)
}