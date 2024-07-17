// import context
import { useStates } from '../../context/useStates';

// import components
import ShopCartTableItem from './ShopCartTableItem';

const ShopCartTable = () => {
	const { cartItems } = useStates();

	return (
		<table>
			<thead>
				<tr>
					<th>Remove product</th>
					<th>Product image</th>
					<th>Product</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{cartItems.map(item => (
					<ShopCartTableItem key={item.id} item={item} />
				))}
			</tbody>
		</table>
	);
};

export default ShopCartTable;
