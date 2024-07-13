const CartQuantitySelector = () => {
	return (
		<div className='cart-quantitySelector'>
			<button type='button'>-</button>
			<input type='number' value='1' />
			<button type='button'>+</button>
		</div>
	);
};

export default CartQuantitySelector;
