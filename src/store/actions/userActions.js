import { fdbService } from "../../services/fdbService";

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
	return async dispatch => {
		dispatch({ type: 'WISH_OFF', number })
	}
}

export function loadDB() {
	console.log('action load DB');
	return async dispatch => {
		try {
			const db = await fdbService.loadDb();
			dispatch({ type: 'LOAD_DB', db })
		} catch (err) {
			console.log('err', err);
		}
	}
}