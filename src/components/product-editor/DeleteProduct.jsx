// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useProducts } from '../../context/product-context/useProducts';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

// import components
import ProductForm from './ProductForm';

const DeleteProduct = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { dispatch } = useProducts();
	const { allProducts, setAllProducts } = useStates();

	const product = allProducts.find(product => product.id === id);

	useEffect(() => {
		if (!product) {
			alert('Product not found!');
			navigate('/product-editor');
		}
	}, [product, navigate]);

	const handleDelete = async () => {
		if (!product) {
			console.error('No product found to delete');
			return;
		}

		const deleteUrl = `http://localhost:5000/${product.category}/${id}`;

		try {
			const response = await fetch(deleteUrl, {
				method: 'DELETE',
			});

			if (response.ok) {
				dispatch({ type: 'DELETE_PRODUCT', payload: id });
				setAllProducts(allProducts.filter(product => product.id !== id));
				alert('Product deleted successfully!');
				navigate('/product-editor');
			} else {
				const errorText = await response.text();
				console.error('Failed to delete product:', errorText);
				throw new Error('Failed to delete product');
			}
		} catch (error) {
			console.error('Error deleting product:', error);
		}
	};

	return (
		<>
			{product && <ProductForm action='delete' name={product.name} image={product.image} price={product.price} description={product.description} category={product.category} onSubmit={handleDelete} />}
		</>
	);
};

export default DeleteProduct;
