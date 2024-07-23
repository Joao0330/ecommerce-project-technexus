// import context
import { useStates } from '../../context/useStates';

// import images
import placeholderImage from '../../assets/placeholder.jpg';

const WishlistTableItem = ({ item }) => {
	const { setWishlistItems } = useStates();
	const { id, image, name, price } = item;

	// function that removes an item from the wishlist
	const removeFromWishlist = item => {
		setWishlistItems(prevWishlistItems => prevWishlistItems.filter(wishlistItem => wishlistItem.id !== item.id));
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
