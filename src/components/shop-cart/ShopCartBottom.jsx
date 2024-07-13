const ShopCartBottom = () => {
	return (
		<div className='shoppingCart__bottom'>
			<h3>Cart Info</h3>

			<div className='shoppingCart__bottom-info'>
				<div>
					<h4>Subtotal</h4>
					<span>€1.235,01</span>
				</div>

				<div>
					<h4>Shipping</h4>
					<span>€4.99</span>
				</div>

				<div>
					<h4>Total</h4>
					<strong>€1.235,01</strong>
				</div>
			</div>

			<button type='button' className='btn-type3'>
				Confirm Purchase
			</button>
		</div>
	);
};

export default ShopCartBottom;
