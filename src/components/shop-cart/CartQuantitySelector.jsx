// import hooks
import { useState } from 'react';

const CartQuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
	const [cartQuantity, setCartQuantity] = useState(initialQuantity);

	// Handler function to increase the quantity
	const handleIncrease = () => {
		const newQuantity = cartQuantity + 1;
		setCartQuantity(newQuantity);
		onQuantityChange(newQuantity);
	};

	// Handler function to decrease the quantity
	const handleDecrease = () => {
		if (cartQuantity > 1) {
			const newQuantity = cartQuantity - 1;
			setCartQuantity(newQuantity);
			onQuantityChange(newQuantity);
		}
	};

	// Handler function to update the quantity
	const handleChange = e => {
		const newQuantity = parseInt(e.target.value, 10);
		if (!isNaN(newQuantity) && newQuantity > 0) {
			setCartQuantity(newQuantity);
			onQuantityChange(newQuantity);
		}
	};

	return (
		<div className='cart-quantitySelector'>
			<button type='button' onClick={handleDecrease}>
				-
			</button>
			<input type='number' value={cartQuantity} onChange={handleChange} />
			<button type='button' onClick={handleIncrease}>
				+
			</button>
		</div>
	);
};

export default CartQuantitySelector;
