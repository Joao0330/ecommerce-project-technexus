// import context
import { useStates } from '../../context/useStates';

// import components
import WishlistTableItem from '../wishlist/WishlistTableItem';

const WishlistTable = () => {
	const { wishlistItems } = useStates();

	return (
		<table>
			<thead>
				<tr>
					<th>remove product</th>
					<th>product image</th>
					<th>Product</th>
					<th>Price</th>
				</tr>
			</thead>

			<tbody>
				{wishlistItems.map(item => (
					<WishlistTableItem key={item.id} item={item} />
				))}
			</tbody>
		</table>
	);
};

export default WishlistTable;
