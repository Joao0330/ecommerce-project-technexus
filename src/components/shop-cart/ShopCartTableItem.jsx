// import context
import { useStates } from '../../context/useStates';

// import components
import CartQuantitySelector from '../shop-cart/CartQuantitySelector';

// import images
import placeholderImage from '../../assets/placeholder.jpg';

const ShopCartTableItem = ({ item }) => {
	const { setCartItems, cartItems } = useStates();
	const { id, image, name, price, quantity } = item;
	const totalPrice = (price * quantity).toFixed(2);

	// function that updates the quantity in the cart
	const updateCartQuantity = (productId, quantity) => {
		setCartItems(prevCartItems => prevCartItems.map(cartItem => (cartItem.id === productId ? { ...cartItem, quantity } : cartItem)));
	};

	// function that removes an item from the cart
	const removeFromCart = item => {
		const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
		if (itemIndex !== -1) {
			const updatedCartItems = [...cartItems.slice(0, itemIndex), ...cartItems.slice(itemIndex + 1)];
			setCartItems(updatedCartItems);
			localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
		}
	};

	// Handler function to update the quantity
	const handleQuantityChange = newQuantity => {
		updateCartQuantity(id, newQuantity);
		const updatedCartItems = cartItems.map(cartItem => (cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem));
		localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
	};

	return (
		<tr>
			<td>
				<button type='button' onClick={() => removeFromCart(item)}>
					X
				</button>
			</td>
			<td>
				<img
					src={image}
					onError={e => {
						e.target.src = placeholderImage;
					}}
					alt={name}
					className='img-fluid'
				/>
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
