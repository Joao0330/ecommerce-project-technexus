// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import icons
import { TiHeartOutline } from 'react-icons/ti';

// import components
import ProductSpecs from '../../components/product-details/ProductSpecs';
import CartQuantitySelector from '../../components/shop-cart/CartQuantitySelector';

// import images
import placeholderImage from '../../assets/placeholder.jpg';

const ProductDetail = () => {
	const { allProducts, addToCart, addToWishlist } = useStates();
	const { id } = useParams();
	const product = allProducts.find(product => product.id === Number(id));

	// State for the cart quantity
	const [quantity, setQuantity] = useState(1);

	// Handler function to add product to the cart
	const handleAddToCart = () => {
		addToCart({ ...product, quantity });
	};

	// Function to handle the add to wishlist functionality
	const handleAddToWishlist = () => {
		addToWishlist({
			...product,
		});
	};

	return (
		<>
			<section className='productDetails'>
				<div className='container'>
					<div className='productDetails__wrapper'>
						<div className='productDetails__top'>
							<div className='productDetails__image'>
								<img
									src={product.image}
									onError={e => {
										e.target.src = placeholderImage;
									}}
									alt={product.name}
								/>
							</div>

							<div className='productDetails__info'>
								<div className='productDetails__info-description'>
									<h2>{product.name}</h2>
									<strong>{product.price.toFixed(2)}€</strong>
									<p>{product.description}</p>
								</div>

								<div className='productDetails__info-quantity'>
									<CartQuantitySelector initialQuantity={quantity} onQuantityChange={setQuantity} />
									<button type='button' className='btn-type2' onClick={handleAddToCart}>
										Add to cart
									</button>
								</div>

								<div className='productDetails__info-wishlist'>
									<button type='button' onClick={handleAddToWishlist}>
										<TiHeartOutline />
										<span>Add to wishlist</span>
									</button>
								</div>

								<div className='productDetails__info-category'>
									<h3>Category:</h3>
									<span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ProductSpecs product={product} />
		</>
	);
};

export default ProductDetail;
