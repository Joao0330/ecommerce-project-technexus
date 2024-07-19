import React from 'react';
import { useStates } from '../../context/useStates';

const ShopCartBottom = () => {
	const { cartItems } = useStates();
	const shippingCost = 4.99;

	const getSubtotal = () => {
		return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
	};

	const subtotal = parseFloat(getSubtotal());
	const total = (subtotal + shippingCost).toFixed(2);

	const handleConfirmPurchase = () => {
		const cartContent = cartItems
			.map(
				item =>
					`<tr key=${item.id}>
                <td style="border: 1px solid; padding: 1rem">${item.name}</td>
                <td style="border: 1px solid;">${item.quantity}</td>
                <td style="border: 1px solid;">${item.price}€</td>
            </tr>`,
			)
			.join('');

		const content = `
			<div style="height: 100vh; display: flex; flex-direction: column; align-items: center; background-color: #1a1a1a; font-family: sans-serif; color: #fff;">
				<h2 style="margin-bottom: 5rem;">Thank you for your purchase!</h2>

				<table style="color: #fff;border: 1px solid; text-align: center">
					<thead>
						<tr style="padding: 1rem">
							<th style="border: 1px solid; padding: 1rem">Product</th>
							<th style="border: 1px solid;">Quantity</th>
							<th style="border: 1px solid;">Price</th>
						</tr>
					</thead>
					<tbody>
						${cartContent}
					</tbody>
				</table>
			</div>
        `;

		const newWindow = window.open('', '_blank', 'width=700,height=500');
		newWindow.document.write(content);
	};

	return (
		<div className='shoppingCart__bottom'>
			<h3>Cart Info</h3>

			<div className='shoppingCart__bottom-info'>
				<div>
					<h4>Subtotal</h4>
					<span>€{subtotal}</span>
				</div>

				<div>
					<h4>Shipping</h4>
					<span>€{shippingCost}</span>
				</div>

				<div>
					<h4>Total</h4>
					<strong>€{total}</strong>
				</div>
			</div>

			<button
				type='button'
				className='btn-type3'
				onClick={() => {
					handleConfirmPurchase();
					window.location.reload();
					window.scrollTo(0, 0);
				}}
			>
				Confirm Purchase
			</button>
		</div>
	);
};

export default ShopCartBottom;
