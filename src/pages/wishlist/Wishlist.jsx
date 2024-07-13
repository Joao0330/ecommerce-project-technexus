// import components
import WishlistTable from '../../components/wishlist/WishlistTable';

const Wishlist = () => {
	return (
		<section className='wishlist'>
			<div className='container'>
				<div className='wishlist__wrapper'>
					<div className='wishlist__top'>
						<h2>Wishlist</h2>
						<p>Your currently wishlisted items:</p>
					</div>

					<div className='wishlist__content'>
						<WishlistTable />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Wishlist;
