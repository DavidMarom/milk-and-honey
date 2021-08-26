export function addItem(item, cart) {
	let newItem = item;

	let exist = false;
	cart.forEach((itemInCart) => { if (itemInCart.id === item.id) { exist = true } });
	
	




	if (exist) {
		newItem.qty = item.qty + 1;
		return async dispatch => { dispatch({ type: 'UPDATE_ITEM', newItem }) }
	}
	else {
		newItem.qty = 1;
		return async dispatch => { dispatch({ type: 'ADD_ITEM', newItem }) }
	}
}

export function removeItem(item) {
	let newItem = item;
	if (item.qty > 1) {
		newItem.qty = item.qty - 1;
		return async dispatch => { dispatch({ type: 'UPDATE_ITEM', newItem }) }

	} else {
		let newItem = item;
		return async dispatch => { dispatch({ type: 'REMOVE_ITEM', newItem }) }
	}
}