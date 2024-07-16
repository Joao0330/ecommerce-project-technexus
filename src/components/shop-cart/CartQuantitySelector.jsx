import React, { useState } from 'react';

const CartQuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
	const [quantity, setQuantity] = useState(initialQuantity);

	const handleIncrease = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
		onQuantityChange(newQuantity);
	};

	const handleDecrease = () => {
		if (quantity > 1) {
			const newQuantity = quantity - 1;
			setQuantity(newQuantity);
			onQuantityChange(newQuantity);
		}
	};

	const handleChange = e => {
		const newQuantity = parseInt(e.target.value, 10);
		if (!isNaN(newQuantity) && newQuantity > 0) {
			setQuantity(newQuantity);
			onQuantityChange(newQuantity);
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
