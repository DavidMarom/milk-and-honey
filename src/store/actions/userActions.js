import { userService } from '../../services/userService';

export function countUsers() {
	return async dispatch => {
		const number = await userService.count();
		dispatch({ type: 'COUNT_USERS', number })
	};
}

export function updateUser(user) {
	return async dispatch => {
		const _user = await userService.update(user);
		dispatch({ type: 'UPDATE_USER', _user })
	};
}

export function loadUsers(filter, currPage) {
	return async dispatch => {
		try {
			const users = await userService.getUsers(filter, currPage);
			dispatch({ type: 'SET_USERS', users });
		} catch (err) {
			console.log('UserActions: err in loadUsers', err);

		} finally {
		}
	};
}

export function removeUser(userId) {
	return async dispatch => {
		try {
			await userService.remove(userId);
			dispatch({ type: 'REMOVE_USER', userId });
		} catch (err) {
			console.log('UserActions: err in removeUser', err);
		}
	};
}

export function signup(userCreds) {
	return async dispatch => {
		const user = await userService.signup(userCreds);
		dispatch({ type: 'SET_USER', user });
	};
}

export function logout() {
	return async dispatch => {
		try {
			await userService.logout();
			dispatch({ type: 'SET_USER', user: null });
		} catch (err) {
			console.log('Log out problem: ', err)
		}
	};
}

export function login(userCreds) {
	return async dispatch => {
		const user = await userService.login(userCreds);
		dispatch({ type: 'SET_USER', user });
	};
}

export function setPageName(name) {
	return dispatch => {
		dispatch({ type: 'PAGE_NAME', name });
	};
}

export function getUserById(userId) {
	return async dispatch => {
		try {
			await userService.getById(userId);
			dispatch({ type: 'GET_USER', userId });
		} catch (err) {
			console.log('UserActions: err in getUser', err);
		}
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