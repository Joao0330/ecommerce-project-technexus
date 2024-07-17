// import context
import { useStates } from '../../context/useStates';

// import components
import WishlistEmpty from '../../components/wishlist/WishlistEmpty';
import WishlistTable from '../../components/wishlist/WishlistTable';

const Wishlist = () => {
	const { wishlistItems } = useStates();

	return (
		<section className='wishlist'>
			<div className='container'>
				<div className='wishlist__wrapper'>
					<div className='wishlist__top'>
						<h2>Wishlist</h2>
						<p>Your currently wishlisted items:</p>
					</div>

					<div className='wishlist__content'>{wishlistItems.length === 0 ? <WishlistEmpty /> : <WishlistTable />}</div>
				</div>
			</div>
		</section>
	);
};

export default Wishlist;
