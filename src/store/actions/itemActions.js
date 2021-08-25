export function addItem(item) {
	return async dispatch => {

		dispatch({ type: 'ADD_ITEM', item })
	}
	
}

export function removeItem(item) {
	return async dispatch => {

		dispatch({ type: 'REMOVE_ITEM', item })
	}	
}


