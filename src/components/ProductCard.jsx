import React from 'react';
import { useStates } from '../context/useStates';
import { Link, useNavigate } from 'react-router-dom';
import { TiHeartOutline } from 'react-icons/ti';
import { TbShoppingCartPlus } from 'react-icons/tb';

const ProductCard = ({ image, title, category, price, productId }) => {
	const { setFilters, addToCart } = useStates();
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

	const handleAddToCart = () => {
		addToCart({ image, title, category, price, productId });
	};

	return (
		<article className='productCard'>
			<Link
				to={`/product-details/${productId}/${encodeURIComponent(title)}`}
				onClick={e => {
					if (e.target.tagName.toLowerCase() !== 'button') {
						e.preventDefault();
						window.scrollTo(0, 0);
					}
				}}
			>
				<img src={image} alt={title} className='img-fluid' />
				<div className='productCard-wishlist'>
					<button
						type='button'
						onClick={e => {
							e.preventDefault();
							handleAddToCart();
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
