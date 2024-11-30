// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useProducts } from '../../context/product-context/useProducts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import ProductForm from './ProductForm';

// import utils
import { createSpecs } from './product-specs/createSpecs';

const CreateProduct = () => {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('computers');

	const navigate = useNavigate();

	const { dispatch } = useProducts();
	const { allProducts, setAllProducts, subCategory, setSubCategory, specs, setSpecs } = useStates();

	// Function to handle the image change
	const handleImageChange = event => {
		const file = event.target.files[0];
		const imageUrl = URL.createObjectURL(file);

		setImage(imageUrl);
	};

	// Function to handle the category change
	const handleCategoryChange = newCategory => {
		setCategory(newCategory);

		// Reset subCategory based on the new category
		const defaultSubCategory = {
			accessories: 'mouse',
			components: 'motherboard',
		}[newCategory];
		setSubCategory(defaultSubCategory || '');
	};

	// Function to handle the product creation
	const handleSubmit = async e => {
		e.preventDefault();

		// Find the maximum ID within all products and convert to number for comparison
		let maxId = 0;
		allProducts.forEach(product => {
			const productId = parseInt(product.id, 10); // Convert string ID to number
			if (productId > maxId) {
				maxId = productId;
			}
		});

		// Add the new product with a unique ID
		const newProduct = {
			id: (maxId + 1).toString(), // Convert the new ID back to string
			name,
			image,
			price: parseFloat(price),
			description,
			category,
			subCategory,
			specs: createSpecs(category, subCategory, specs),
		};
		try {
			const response = await fetch(`http://localhost:5000/${category}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newProduct),
			});

			const data = await response.json();
			dispatch({ type: 'CREATE_PRODUCT', payload: data });

			// Append the new product to the allProducts array
			setAllProducts(prevProducts => [...prevProducts, data]);

			alert('Product created successfully!');
			navigate('/product-editor');
		} catch (error) {
			console.error('Error creating product:', error);
		}
	};

	return (
		<>
			<ProductForm
				action='create'
				name={name}
				image={image}
				price={price}
				description={description}
				category={category}
				subCategory={subCategory}
				specs={specs}
				onSpecsChange={setSpecs}
				onNameChange={setName}
				handleImageChange={handleImageChange}
				onPriceChange={setPrice}
				onDescriptionChange={setDescription}
				onCategoryChange={handleCategoryChange}
				onSubCategoryChange={setSubCategory}
				onSubmit={handleSubmit}
			/>
		</>
	);
};

export default CreateProduct;
