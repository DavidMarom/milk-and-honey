export function addItem(item, cart) {
	let newItem = item;
	let exist = false;
	cart.map((itemInCart) => { if (itemInCart.id === item.id) { exist = true } });

	console.log(exist);

	if (exist) {
		newItem.qty = item.qty + 1;
		return async dispatch => { dispatch({ type: 'UPDATE_ITEM', newItem }) }
	}
	else
	{
		console.log('action - not exist');
		newItem.qty=1;
		return async dispatch => { dispatch({ type: 'ADD_ITEM', newItem }) }

	}

}



export function removeItem(item) {
	return async dispatch => {

		dispatch({ type: 'REMOVE_ITEM', item })
	}
}





			// let newItem = item;
			// let newCart = cart

			// cart.map((itemInCart, idx) => {
			// 	if (itemInCart.id === item.id) {
			// 		newItem.qty++;
			// 		newCart[idx] = newItem;
			// 	}
			// 	else {
			// 		newItem.qty = 1;
			// 		newCart.push(newItem);
			// 	}

			// })
