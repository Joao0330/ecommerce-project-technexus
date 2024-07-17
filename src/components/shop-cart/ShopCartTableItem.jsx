// import context
import { useStates } from '../../context/useStates';

// import components
import CartQuantitySelector from '../shop-cart/CartQuantitySelector';

const ShopCartTableItem = ({ item }) => {
	const { setCartItems } = useStates();
	const { id, image, name, price, quantity } = item;
	const totalPrice = (price * quantity).toFixed(2);

	// function that updates the quantity in the cart
	const updateCartQuantity = (productId, quantity) => {
		setCartItems(prevCartItems => prevCartItems.map(cartItem => (cartItem.id === productId ? { ...cartItem, quantity } : cartItem)));
	};

	// function that removes an item from the cart
	const removeFromCart = item => {
		setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem.id !== item.id));
	};

	// Handler function to update the quantity
	const handleQuantityChange = newQuantity => {
		updateCartQuantity(id, newQuantity);
	};

	return (
		<tr>
			<td>
				<button type='button' onClick={() => removeFromCart(item)}>
					X
				</button>
			</td>
			<td>
				<img src={image} alt={name} className='img-fluid' />
			</td>
			<td>{name}</td>
			<td>
				<CartQuantitySelector initialQuantity={quantity} onQuantityChange={handleQuantityChange} />
			</td>
			<td>{totalPrice}€</td>
		</tr>
	);
};

export default ShopCartTableItem;
