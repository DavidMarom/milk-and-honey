let localLoggedinUser = {
	"username": "David",
	"wish": [1, 3]
};
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
	users: [],
	loggedInUser: localLoggedinUser,
	pageName: null
}

export function user(state = initialState, action = {}) {
	switch (action.type) {
		

		case 'PAGE_NAME':
			return { ...state, pageName: action.name };

		case 'WISH_ON':
			return {...state, loggedInUser: { ...state.loggedInUser, wish: [...state.loggedInUser.wish, action.number] }}

		case 'WISH_OFF':
			console.log('OFF');
			return {...state, loggedInUser: { ...state.loggedInUser, wish: state.loggedInUser.wish.filter(item => item !== action.number) }}


				default:
			return state
			}
	}