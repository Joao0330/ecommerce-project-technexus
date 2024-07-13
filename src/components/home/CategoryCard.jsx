// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, title, category }) => {
	const { setFilters, setCurrentPage } = useStates();
	const navigate = useNavigate();

	// Function that redirects to the product list page at the respective clicked category 
	const handleCategoryClick = () => {
		navigate(`/product-list/${category}`);

		window.scrollTo(0, 0);
		setFilters(prevFilters => ({
			...prevFilters,
			price: { min: null, max: null },
			category: category,
		}));
		setCurrentPage(1);
	};
	return (
		<article className='categories__content-card'>
			<div>
				<img src={image} alt={title} className='img-fluid' />
				<button onClick={handleCategoryClick}>see more</button>
			</div>
			<strong>{title}</strong>
		</article>
	);
};

export default CategoryCard;
