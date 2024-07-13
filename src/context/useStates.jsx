import { useContext } from 'react';
import { StateContext } from './StateContext';

export const useStates = () => {
	return useContext(StateContext);
};
