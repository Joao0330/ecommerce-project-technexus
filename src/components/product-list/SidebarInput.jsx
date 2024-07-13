// import hooks
import { useNavigate } from 'react-router-dom';

const Input = ({ handleChange, value, title, name, active }) => {
	const navigate = useNavigate();

	const handleCategoryClick = () => {
		navigate(`/product-list/${value}`);
	};

	return (
		<label className='sidebar-label-container' onClick={handleCategoryClick}>
			<input
				className={active}
				onChange={event => {
					handleChange(event.target.value);
					window.scrollTo(0, 0);
				}}
				type='radio'
				name={name}
				value={value}
			/>
			<span>{title}</span>
		</label>
	);
};

export default Input;
