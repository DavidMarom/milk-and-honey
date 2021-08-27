

export function setPageName(name) {
	return dispatch => {
		dispatch({ type: 'PAGE_NAME', name });
	};
}

export function wishOn(number) {
	return async dispatch => {
		dispatch({ type: 'WISH_ON', number })
	}
}

export function wishOff(number) {
	console.log('action triggered');
	return async dispatch => {
		dispatch({ type: 'WISH_OFF', number })
	}
}