// import components
import MotherboardSpecsForm from './MotherboardSpecsForm';

// import utils
import { fieldsByCategory } from './fieldsByCategory';
import { fieldsBySubCategory } from './fieldsBySubCategory';

const SpecsForm = ({ subCategory, category, specs, onSpecsChange }) => {
	const fields = fieldsBySubCategory[subCategory] || fieldsByCategory[category] || [];
	if (subCategory === 'motherboard') {
		return <MotherboardSpecsForm specs={specs} onSpecsChange={onSpecsChange} />;
	}
	return (
		<div className='productForm__specs'>
			{fields.map(field => (
				<div key={field.key}>
					<label>{field.label}:</label>
					<input type='text' placeholder={field.placeholder} value={specs[field.key] || ''} onChange={e => onSpecsChange({ ...specs, [field.key]: e.target.value })} />
				</div>
			))}
		</div>
	);
};

export default SpecsForm;
