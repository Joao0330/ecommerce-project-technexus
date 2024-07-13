import React from 'react';
import { useStates } from '../../context/useStates';
import ShopCartTableItem from './ShopCartTableItem';

const ShopCartTable = () => {
	const { cartItems } = useStates();

	return (
		<table>
			<thead>
				<tr>
					<th>remove product</th>
					<th>product image</th>
					<th>Product</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{cartItems.map((item, index) => (
					<ShopCartTableItem key={index} item={item} />
				))}
			</tbody>
		</table>
	);
};

export default ShopCartTable;
