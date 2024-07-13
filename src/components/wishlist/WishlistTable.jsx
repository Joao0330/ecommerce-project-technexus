// import components
import WishlistTableItem from '../wishlist/WishlistTableItem';

const WishlistTable = () => {
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
				<WishlistTableItem />
				<WishlistTableItem />
				<WishlistTableItem />
				<WishlistTableItem />
				<WishlistTableItem />
			</tbody>
		</table>
	);
};

export default WishlistTable;
