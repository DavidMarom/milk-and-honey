let localItems = [];
if (localStorage.items) localItems = JSON.parse(localStorage.items);

const initialState = {
	items: localItems
}

export function item(state = initialState, action = {}) {
	switch (action.type) {

		case 'UPDATE_ITEM':
			return { ...state, items: state.items.map(stateItem => (stateItem.id === action.newItem.id) ? action.newItem : stateItem) };

		case 'ADD_ITEM':
			return { ...state, items: [...state.items, action.newItem] };

		case 'REMOVE_ITEM':
			return { ...state, items: state.items.filter(aaa => aaa.id !== action.newItem.id) };

		default: return state
	}
}