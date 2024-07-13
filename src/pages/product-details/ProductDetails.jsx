// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useParams } from 'react-router-dom';

// import icons
import { TiHeartOutline } from 'react-icons/ti';

// import components
import ProductSpecs from '../../components/product-details/ProductSpecs';
import CartQuantitySelector from '../../components/shop-cart/CartQuantitySelector';

const ProductDetail = () => {
	const { allProducts } = useStates();

	const { id } = useParams();
	// Find the product with the given id
	const product = allProducts.find(product => product.id === Number(id));

	return (
		<>
			<section className='productDetails'>
				<div className='container'>
					<div className='productDetails__wrapper'>
						<div className='productDetails__top'>
							<div className='productDetails__image'>
								<img src={product.image} alt={product.name} />
							</div>

							<div className='productDetails__info'>
								<div className='productDetails__info-description'>
									<h2>{product.name}</h2>
									<strong>{product.price.toFixed(2)}€</strong>
									<p>{product.description}</p>
								</div>

								<div className='productDetails__info-quantity'>
									<CartQuantitySelector />
									<button type='button' className='btn-type2'>
										add to cart
									</button>
								</div>

								<div className='productDetails__info-wishlist'>
									<button type='button'>
										<TiHeartOutline />
										<span>Add to wishlist</span>
									</button>
								</div>

								<div className='productDetails__info-category'>
									<h3>Category:</h3>
									<span>
										<span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
									</span>
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
