let localLoggedinUser = {
	"username": "David",
	"wish": [1, 3]
};
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
	users: [],
	loggedInUser: localLoggedinUser,
	userCount: null,
	pageName: null
}

export function user(state = initialState, action = {}) {
	switch (action.type) {
		case 'COUNT_USERS':
			return { ...state, userCount: action.number[0]['total'] };

		case 'SET_USER':
			return { ...state, loggedInUser: action.user, popup: true };
		case 'GET_USER':
			return { ...state, singleUser: action.userId };
		case 'SET_USERS':
			return { ...state, users: action.users };
		case 'REMOVE_USER':
			return { ...state, users: state.users.filter(user => user._id !== action.userId) };

		case 'PAGE_NAME':
			return { ...state, pageName: action.name };
		case 'UPDATE_USER':
			return { ...state, users: state.users.map(user => (action._user._id === user._id) ? action._user : user) }

		case 'WISH_ON':
			return {...state, loggedInUser: { ...state.loggedInUser, wish: [...state.loggedInUser.wish, action.number] }}

		case 'WISH_OFF':
			console.log('OFF');
			return {...state, loggedInUser: { ...state.loggedInUser, wish: state.loggedInUser.wish.filter(item => item !== action.number) }}


				default:
			return state
			}
	}