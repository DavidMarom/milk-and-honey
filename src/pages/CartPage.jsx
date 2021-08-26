import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { CartItem } from '../cmps/CartItem'

export const CartPage = () => {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Cart")) });

	const cart = useSelector((state) => state.item.items);
	let total = 0;
	cart.forEach(item => { total = total + (item.qty * item.price) });
	total = total.toFixed(2);


	return (
		<div className="cat-page">
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



			<div className="pad-100"></div>
			<div className="rb bg-grey pad-r-30">
				<div></div>
				<div className="rb w-300">
					<h1 className="font-black">Total:</h1>
					<h1 className="font-yellow">{total}</h1>
				</div>
			</div>

			<div className="pad-100"></div>

		</div>
	)
}