import React from 'react';
import { useStates } from '../../context/useStates';

const CartQuantitySelector = ({ productId, quantity }) => {
	const { updateCartQuantity } = useStates();

	const handleIncrease = () => {
		updateCartQuantity(productId, quantity + 1);
	};

	const handleDecrease = () => {
		if (quantity > 1) {
			updateCartQuantity(productId, quantity - 1);
		}
	};

	const handleChange = e => {
		const newQuantity = parseInt(e.target.value, 10);
		if (!isNaN(newQuantity) && newQuantity > 0) {
			updateCartQuantity(productId, newQuantity);
		}
	};

	return (
		<div className='cart-quantitySelector'>
			<button type='button' onClick={handleDecrease}>
				-
			</button>
			<input type='number' value={quantity} onChange={handleChange} />
			<button type='button' onClick={handleIncrease}>
				+
			</button>
		</div>
	);
};

export default CartQuantitySelector;
