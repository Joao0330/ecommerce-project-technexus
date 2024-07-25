// import context
import { useStates } from '../../context/useStates';

// import images
import placeholderImage from '../../assets/placeholder.jpg';

const WishlistTableItem = ({ item }) => {
	const { setWishlistItems, wishlistItems } = useStates();
	const { id, image, name, price } = item;

	// function that removes an item from the wishlist
	const removeFromWishlist = item => {
		const itemIndex = wishlistItems.findIndex(wishlistItem => wishlistItem.id === item.id);
		if (itemIndex !== -1) {
			const updatedWishlistItems = [...wishlistItems.slice(0, itemIndex), ...wishlistItems.slice(itemIndex + 1)];
			setWishlistItems(updatedWishlistItems);
			localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));
		}
	};

	return (
		<tr>
			<td>
				<button type='button' onClick={() => removeFromWishlist(item)}>
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
			<td>{price.toFixed(2)}€</td>
		</tr>
	);
};

export default WishlistTableItem;
