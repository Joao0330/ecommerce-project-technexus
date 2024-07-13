// import products json
import productsData from '../../data/products.json';

// import components
import ProductCard from '../../components/ProductCard';

const Featured = () => {
	// Puts all products in an array
	const allProducts = [...productsData.computers, ...productsData.laptops, ...productsData.smartphones, ...productsData.accessories, ...productsData.components];

	// Selects 8 random products
	const featuredProducts = allProducts.sort(() => Math.random() - 0.5).slice(0, 8);
	console.log(featuredProducts);

	return (
		<section className='featured'>
			<div className='container'>
				<div className='featured__wrapper'>
					<div className='featured__title'>
						<h2>Featured Products</h2>
						<p>Explore some of TechNexus latest products available in our store.</p>
					</div>

					<div className='featured__content'>
						{featuredProducts.map(product => (
							<ProductCard key={product.id} image={product.image} title={product.name} category={product.category} price={product.price.toFixed(2)} productId={product.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
