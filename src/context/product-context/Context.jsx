import { createContext, useReducer } from 'react';

import { productReducer } from './Reducer';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, []);

	return <ProductContext.Provider value={{ products: state, dispatch }}>{children}</ProductContext.Provider>;
};
