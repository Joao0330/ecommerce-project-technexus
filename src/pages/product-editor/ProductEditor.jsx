// impoer hooks
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import icons
import { RiEdit2Line } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';

// import images
import placeholderImage from '../../assets/placeholder.jpg';

// import components
import Pagination from '../../components/product-list/Pagination';

const ProductEditor = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(10);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const endpoints = [
					'http://localhost:5000/computers',
					'http://localhost:5000/laptops',
					'http://localhost:5000/smartphones',
					'http://localhost:5000/accessories',
					'http://localhost:5000/components',
				];

				const responses = await Promise.all(endpoints.map(endpoint => fetch(endpoint)));

				const errors = responses.filter(response => !response.ok);
				if (errors.length > 0) {
					throw new Error('Could not fetch products');
				}

				const data = await Promise.all(responses.map(response => response.json()));
				const allProducts = data.flat();
				const sortedData = allProducts.sort((a, b) => a.id - b.id);
				setProducts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchProducts();
	}, []);

	const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

	return (
		<section className='productEditor'>
			<div className='container'>
				<div className='productEditor__wrapper'>
					<div className='productEditor__top'>
						<h2>Product Editor</h2>
						<p>Edit our products with this powerful tool!</p>
					</div>

					<div className='productEditor__products'>
						<div className='productEditor__products-title'>
							<h3>List of Products:</h3>

							<Link to='/product-editor/create-product' className='btn-type4' onClick={() => window.scrollTo(0, 0)}>
								<IoIosAddCircleOutline />
								<span>Add Product</span>
							</Link>
						</div>

						{error && <h4>Failed to fetch products</h4>}

						<table className='productEditor__table'>
							<thead>
								<tr>
									<th>Id</th>
									<th>Product</th>
									<th>Price</th>
									<th>Description</th>
									<th>Category</th>
									<th>Edit</th>
								</tr>
							</thead>

							<tbody>
								{/* Item 1 */}
								{currentProducts.map(product => (
									<tr key={product.id}>
										<td data-title='Id'>{product.id}</td>
										<td data-title='Product'>
											<img
												src={product.image}
												alt='product image'
												onError={e => {
													e.target.src = placeholderImage;
												}}
											/>
											<span>{product.name.length > 50 ? product.name.slice(0, 20) + ' ...' : product.name}</span>
										</td>
										<td data-title='Price'>{product.price.toFixed(2)}€</td>
										<td data-title='Description'>{product.description.length > 100 ? product.description.slice(0, 100) + ' ...' : product.description}</td>
										<td data-title='Category'>{product.category}</td>
										<td data-title='Edit'>
											<Link onClick={() => window.scrollTo(0, 0)}>
												<RiEdit2Line />
											</Link>
											<Link to={`/product-editor/delete-product/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
												<MdDeleteOutline />
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<Pagination cardsPerPage={productsPerPage} totalCards={products.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductEditor;
