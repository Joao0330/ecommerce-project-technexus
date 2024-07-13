import React from 'react';
import { useStates } from '../../context/useStates';
import CartQuantitySelector from '../shop-cart/CartQuantitySelector';

const ShopCartTableItem = ({ item }) => {
	const { removeFromCart } = useStates();
	const { productId, image, title, price, quantity } = item;
	const totalPrice = (price * quantity).toFixed(2); // Calculate total price

	return (
		<tr>
			<td>
				<button type='button' onClick={() => removeFromCart(item)}>
					X
				</button>
			</td>
			<td>
				<img src={image} alt={title} className='img-fluid' />
			</td>
			<td>{title}</td>
			<td>
				<CartQuantitySelector productId={productId} quantity={quantity} />
			</td>
			<td>{totalPrice}€</td> {/* Display total price */}
		</tr>
	);
};

export default ShopCartTableItem;
