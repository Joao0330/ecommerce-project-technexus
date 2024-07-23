// import hooks
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ action, name, onSubmit, onNameChange, handleImageChange, price, onPriceChange, description, onDescriptionChange, category, onCategoryChange }) => {
	const navigate = useNavigate();

	return (
		<section className='productForm'>
			<div className='container'>
				<div className='productForm__wrapper'>
					<form onSubmit={onSubmit}>
						<h3> {action === 'update' ? 'Update Product' : action === 'delete' ? 'Delete Product' : 'Create Product'}</h3>

						<div className='productForm__name'>
							<label>Name:</label>
							<input type='text' value={name} onChange={e => onNameChange(e.target.value)} placeholder='Enter the product name' required />
						</div>

						<div className='productForm__group'>
							<div className='productForm__image'>
								<label>Image:</label>
								<input type='file' onChange={handleImageChange} id='product' name='product' accept='image/png, image/jpeg' required />
							</div>

							<div className='productForm__price'>
								<label>Price:</label>
								<input type='number' value={price} onChange={e => onPriceChange(e.target.value)} placeholder='Enter the product price' onWheel={e => e.target.blur()} required />
							</div>
						</div>

						<div className='productForm__description'>
							<label>Description:</label>
							<textarea value={description} onChange={e => onDescriptionChange(e.target.value)} placeholder='Enter the product description' required />
						</div>

						<div className='productForm__category'>
							<label>Category:</label>
							<select value={category} onChange={e => onCategoryChange(e.target.value)} name='category' id='category' required>
								<option value='computers'>Computers</option>
								<option value='laptops'>Laptops</option>
								<option value='smartphones'>Smartphones</option>
								<option value='accessories'>Accessories</option>
								<option value='components'>Components</option>
							</select>
						</div>

						<div className='productForm__buttons'>
							{action === 'delete' ? (
								<>
									<button className='btn-type3' type='button' onClick={onSubmit}>
										Delete
									</button>
									<button className='btn-type4' type='button' onClick={() => navigate('/product-editor')}>
										Cancel
									</button>
								</>
							) : (
								<>
									<button className='btn-type3' type='submit'>
										{action === 'update' ? 'Update' : 'Submit'}
									</button>
									<button className='btn-type4' type='button' onClick={() => navigate('/product-editor')}>
										Cancel
									</button>
								</>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ProductForm;
