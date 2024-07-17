// import context
import { useStates } from '../../context/useStates';

// import components
import ShopCartEmpty from '../../components/shop-cart/ShopCartEmpty';
import ShopCartTable from '../../components/shop-cart/ShopCartTable';
import ShopCartBottom from '../../components/shop-cart/ShopCartBottom';

const ShopCart = () => {
	const { cartItems } = useStates();

	return (
		<section className='shoppingCart'>
			<div className='container'>
				<div className='shoppingCart__wrapper'>
					<div className='shoppingCart__top'>
						<h2>Shopping Cart</h2>
						<p>Check your shopping cart items:</p>
					</div>

					<div className='shoppingCart__content'>
						{cartItems.length === 0 ? (
							<ShopCartEmpty />
						) : (
							<>
								<ShopCartTable />
								<ShopCartBottom />
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShopCart;
