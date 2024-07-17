// import context
import { useStates } from '../../context/useStates';

// import hooks
import { Link } from 'react-router-dom';

// import icons
import { BsCartX } from 'react-icons/bs';

const ShopCartEmpty = () => {
    const { handleCategoryClick } = useStates();
    
	return (
		<div className='shoppingCart__content-empty'>
			<BsCartX />
			<h3>Your shopping cart is empty</h3>

			<p>You dont have any products in your shopping cart yet. Click below to return to the shop</p>

			<Link to='/product-list/all' className='btn-type1' onClick={handleCategoryClick}>
				return to shop
			</Link>
		</div>
	);
}

export default ShopCartEmpty