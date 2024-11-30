import SpecsForm from './product-specs/SpecsForm';

const SubcategorySelector = ({ subCategory, onSubCategoryChange, category, specs, onSpecsChange }) => {
	const subCategoryOptions = {
		accessories: ['mouse', 'monitor', 'keyboard', 'headphones'],
		components: ['motherboard', 'cpu', 'ram', 'gpu', 'cooler', 'storage'],
	};

	return (
		<>
			<div className='productForm__subCategory'>
				<label>Sub Category:</label>
				<select className='selectMenu' value={subCategory} onChange={e => onSubCategoryChange(e.target.value)} name='subCategory' id='subCategory' required>
					{(subCategoryOptions[category] || []).map(option => (
						<option key={option} value={option}>
							{option.charAt(0).toUpperCase() + option.slice(1)}
						</option>
					))}
				</select>
			</div>

			<SpecsForm subCategory={subCategory} specs={specs} onSpecsChange={onSpecsChange} />
		</>
	);
};

export default SubcategorySelector;
