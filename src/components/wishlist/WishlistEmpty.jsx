// import context
import { useStates } from '../../context/useStates';

// import hooks
import { Link } from 'react-router-dom';

// import icons
import { TbHeartX } from 'react-icons/tb';

const WishlistEmpty = () => {
    const { handleCategoryClick } = useStates();

  return (
		<div className='wishlist__content-empty'>
			<TbHeartX />
			<h3>Your Wishlist is empty</h3>

			<p>You dont have any products in the wishlist yet. Click below to return to the shop</p>

			<Link to='/product-list/all' className='btn-type1' onClick={handleCategoryClick}>
				return to shop
			</Link>
		</div>
	);
}

export default WishlistEmpty