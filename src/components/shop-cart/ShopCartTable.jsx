// import components
import ShopCartTableItem from "./ShopCartTableItem";

const ShopCartTable = () => {
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
				<ShopCartTableItem />
				<ShopCartTableItem />
				<ShopCartTableItem />
				<ShopCartTableItem />
				<ShopCartTableItem />
			</tbody>
		</table>
	);
};

export default ShopCartTable;
