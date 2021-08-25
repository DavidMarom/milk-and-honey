const initialState = {
	items: [{
		"id": 13,
		"title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
		"price": 599,
		"description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
		"category": "electronics",
		"image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
		"qty": 2
	}]
}

export function item(state = initialState, action = {}) {
	switch (action.type) {

		case 'UPDATE_ITEM':
			return { ...state, items: state.items.map(stateItem => (stateItem.id === action.newItem.id) ? action.newItem : stateItem) };

		case 'ADD_ITEM':
			return { ...state, items: [...state.items, action.newItem] };

		case 'REMOVE_ITEM':
			return { ...state, items:  state.items.filter(stateItem => stateItem._id == action.itemID)    };

		default: return state
	}
}