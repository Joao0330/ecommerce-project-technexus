import productsData from '../../data/products.json';
/* import { useState, useEffect } from 'react'; */

const Test = () => {
	const allProducts = [...productsData.computers, ...productsData.laptops, ...productsData.smartphones, ...productsData.accessories, ...productsData.components];
	console.log(allProducts);

	return (
		<div>
			<h1>All Products</h1>
			{allProducts.map((product, index) => (
				<div key={index}>
					<h2>{product.name}</h2>
					<img src={product.image} alt='' />
					<p>{product.description}</p>
					<p>Price: €{product.price}</p>
					<ul>
						{Object.entries(product.specs).map(([key, value]) => (
							<li key={key}>
								<strong>{key}:</strong> {value}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Test;
