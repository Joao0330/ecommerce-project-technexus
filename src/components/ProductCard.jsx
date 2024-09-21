// import context
import { useStates } from '../context/useStates';

// import hooks
import { Link, useNavigate } from 'react-router-dom';

// import icons
import { TiHeartOutline } from 'react-icons/ti';
import { TbShoppingCartPlus } from 'react-icons/tb';

// import images
import placeholderImage from '../assets/placeholder.jpg';

const ProductCard = ({ image, title, category, price, productId }) => {
	const { setFilters, addToCart, addToWishlist, cartToast, wishlistToast } = useStates();
	const navigate = useNavigate();

	const handleCategoryClick = () => {
		navigate(`/product-list/${category}`);
		window.scrollTo(0, 0);
		setFilters(prevFilters => ({
			...prevFilters,
			price: { min: null, max: null },
			category: category,
		}));
	};

	// Function to handle the add to cart functionality
	const handleAddToCart = () => {
		addToCart({
			id: productId,
			image: image,
			name: title,
			category: category,
			price: parseFloat(price),
			quantity: 1,
		});
	};

	// Function to handle the add to wishlist functionality
	const handleAddToWishlist = () => {
		addToWishlist({
			id: productId,
			image: image,
			name: title,
			price: parseFloat(price),
		});
	};

	// Function to handle the wishlist toast
	const handleWishlistToast = () => {
		wishlistToast({
			id: productId,
		});
	};

	return (
		<article className='productCard'>
			<Link to={`/product-details/${productId}/${encodeURIComponent(title)}`}>
				<img
					src={image}
					onError={e => {
						e.target.src = placeholderImage;
					}}
					alt={title}
					className='img-fluid'
					onClick={() => window.scrollTo(0, 0)}
				/>
				<div className='productCard-wishlist'>
					<button
						type='button'
						onClick={e => {
							e.preventDefault();
							handleAddToWishlist();
							handleWishlistToast();
						}}
					>
						<TiHeartOutline />
					</button>
					<div className='productCard-wishlist-effect'>
						<span>Add to Wishlist</span>
					</div>
				</div>

				<div className='productCard-cartBtn'>
					<button
						type='button'
						onClick={e => {
							e.preventDefault();
							handleAddToCart();
							cartToast();
						}}
					>
						<span>add to cart</span>
						<TbShoppingCartPlus className='cart-iconbtn' />
					</button>
				</div>
			</Link>
			<div className='productCard-info'>
				<Link to={`/product-details/${productId}/${encodeURIComponent(title)}`} onClick={() => window.scrollTo(0, 0)}>
					{title}
				</Link>
				<span onClick={handleCategoryClick}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
				<span>{price}€</span>
			</div>
		</article>
	);
};

export default ProductCard;
