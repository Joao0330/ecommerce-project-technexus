import React from 'react';
import { useStates } from '../../context/useStates';

const ShopCartBottom = () => {
	const { getSubtotal } = useStates();
	const shippingCost = 4.99; // Assuming a fixed shipping cost

	const subtotal = parseFloat(getSubtotal());
	const total = (subtotal + shippingCost).toFixed(2);

	return (
		<div className='shoppingCart__bottom'>
			<h3>Cart Info</h3>

			<div className='shoppingCart__bottom-info'>
				<div>
					<h4>Subtotal</h4>
					<span>{subtotal}€</span>
				</div>

				<div>
					<h4>Shipping</h4>
					<span>€{shippingCost}€</span>
				</div>

				<div>
					<h4>Total</h4>
					<strong>{total}€</strong>
				</div>
			</div>

			<button type='button' className='btn-type3'>
				Confirm Purchase
			</button>
		</div>
	);
};

export default ShopCartBottom;
