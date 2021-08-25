import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

export const CartPage = () => {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Cart")) });

	const cart = useSelector((state) => state.item.items);

	console.log(cart);

	return (
		<div className="product-page">
			sadfsd
		</div>
	)
}