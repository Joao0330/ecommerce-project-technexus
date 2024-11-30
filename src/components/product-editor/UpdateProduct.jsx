// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useProducts } from '../../context/product-context/useProducts';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import components
import ProductForm from './ProductForm';

const UpdateProduct = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { dispatch } = useProducts();
	const { allProducts, setAllProducts, subCategory, setSubCategory, specs, setSpecs } = useStates();

	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');

	const product = allProducts.find(product => product.id === id);

	// Function to handle the image change
	const handleImageChange = event => {
		const file = event.target.files[0];
		const imageUrl = URL.createObjectURL(file);

		setImage(imageUrl);
	};

	const preserveSpecsArrays = currentSubCategory => {
		setSpecs(prevSpecs => {
			// Reset specs if they are irrelevant to the current subcategory
			if (currentSubCategory === 'motherboard') {
				return {
					chipset: prevSpecs.chipset || '',
					cpuSupport: prevSpecs.cpuSupport || [],
					motherboardConnectivity: prevSpecs.motherboardConnectivity || [],
					osSupported: prevSpecs.osSupported || [],
				};
			}

			// Handle other subcategories or reset completely if not motherboard
			return {}; // Reset specs completely for other subcategories
		});
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

		preserveSpecsArrays(defaultSubCategory || '');
	};

	const handleSubCategoryChange = newSubCategory => {
		setSubCategory(newSubCategory);

		// Preserve specs arrays only if relevant to the new subcategory
		preserveSpecsArrays(newSubCategory);
	};

	useEffect(() => {
		if (!product) {
			alert('Product not found!');
			navigate('/product-editor');
		}

		setName(product.name);
		setImage(product.image);
		setPrice(product.price);
		setDescription(product.description);
		setCategory(product.category);
		setSubCategory(product.subCategory);
		setSpecs(product.specs);
	}, [product, navigate]);

	const handleUpdate = async e => {
		e.preventDefault();

		if (!product) {
			console.error('No product found to update');
			return;
		}

		const updatedProduct = {
			id,
			name,
			image,
			price: parseFloat(price),
			description,
			category,
			subCategory,
			specs,
		};
		try {
			// Remove the product from its original category array
			await fetch(`http://localhost:5000/${product.category}/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			// Add the updated product to the new category array
			const response = await fetch(`http://localhost:5000/${category}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedProduct),
			});

			// Update the local state to reflect the changes
			setAllProducts(prevProducts => {
				// Replace the old product with the updated one
				const updatedProducts = prevProducts.map(product => (product.id === id ? updatedProduct : product));
				// Sort by ID in ascending order
				return updatedProducts.sort((a, b) => a.id - b.id);
			});

			alert('Product Updated');
			navigate('/product-editor');
		} catch (error) {
			console.error('Error updating product:', error);
		}
	};

	return (
		<>
			<ProductForm
				action='update'
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
				onSubCategoryChange={handleSubCategoryChange}
				onSubmit={handleUpdate}
			/>
		</>
	);
};

export default UpdateProduct;
