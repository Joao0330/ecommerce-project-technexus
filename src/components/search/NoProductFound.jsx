// import context
import { useStates } from '../../context/useStates';

// import hooks
import { Link } from 'react-router-dom';

// import icons
import { TbFaceIdError } from 'react-icons/tb';

const NoProductFound = () => {
	const { handleCategoryClick } = useStates();

	return (
		<div className='noProduct'>
			<div className='container'>
				<div className='noProduct__wrapper'>
					<TbFaceIdError />
					<h2>No Products Found</h2>

					<p>The product you are looking for does not exist. Please make sure you have entered the correct name, or try searching for another product.</p>

					<Link to='/product-list/all' className='btn-type1' onClick={handleCategoryClick}>
						return to shop
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NoProductFound;
