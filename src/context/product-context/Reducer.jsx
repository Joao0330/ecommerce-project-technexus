export function productReducer(state, action) {
	switch (action.type) {
		case 'INITIAL_LOAD':
			return action.payload;
		case 'CREATE_PRODUCT':
			return [...state, action.payload];
		case 'UPDATE_PRODUCT':
			return state.map(product => (product.id === action.payload.id ? action.payload : product));
		case 'DELETE_PRODUCT':
			return state.filter(product => product.id !== action.payload.id);
		default:
			return state;
	}
}
