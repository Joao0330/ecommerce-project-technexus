// import components
import ShopCartTable from '../../components/shop-cart/ShopCartTable';
import ShopCartBottom from '../../components/shop-cart/ShopCartBottom';

const ShopCart = () => {
	return (
		<section className='shoppingCart'>
			<div className='container'>
				<div className='shoppingCart__wrapper'>
					<div className='shoppingCart__top'>
						<h2>Shopping Cart</h2>
						<p>Check your shopping cart items:</p>
					</div>

					<div className='shoppingCart__content'>
						<ShopCartTable />
					</div>

					<ShopCartBottom />
				</div>
			</div>
		</section>
	);
};

export default ShopCart;
