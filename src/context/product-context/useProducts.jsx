import { useContext } from 'react';
import { ProductContext } from './Context';

const useProducts = () => useContext(ProductContext);

export { useProducts };
