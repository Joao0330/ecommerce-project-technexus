// import context
import { useStates } from '../context/useStates';

// import hooks
import { Link } from 'react-router-dom';

// import Icons
import { IoSearchOutline } from 'react-icons/io5';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { FaRegMoon } from 'react-icons/fa';
import { LuHeart } from 'react-icons/lu';

const Navbar = () => {
	const { isOpen, toggleMenu, scrollPosition, setScrollPosition, cartItems, handleCategoryClick } = useStates();

	// Adds active class to the navbar when scrolled down
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};
	window.addEventListener('scroll', handleScroll);

	return (
		<div className={`navbar ${scrollPosition >= 80 ? 'active' : ''}`}>
			<div className='container'>
				<div className='navbar__wrapper'>
					<Link to='/' onClick={() => window.scrollTo(0, 0)}>
						<h1>TechNexus</h1>
					</Link>

					<nav className={isOpen ? 'active' : ''}>
						<ul className='navbar__menu'>
							<li>
								<Link
									to='/'
									onClick={() => {
										window.scrollTo(0, 0);
										toggleMenu();
									}}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to='/product-list/all'
									onClick={() => {
										handleCategoryClick();
										toggleMenu();
									}}
								>
									Products
								</Link>
							</li>
							<li>
								<a href='#'>About Us</a>
							</li>
							<li>
								<Link
									to='/contact'
									onClick={() => {
										window.scrollTo(0, 0);
										toggleMenu();
									}}
								>
									Contact Us
								</Link>
							</li>
						</ul>

						<form className='navbar__search'>
							<input type='text' placeholder='Search for products ...' />
							<button type='submit'>
								<IoSearchOutline />
							</button>
						</form>

						<div className='navbar__rightArea'>
							<Link
								to='wishlist'
								className='navbar__rightArea-wishlist'
								onClick={() => {
									window.scrollTo(0, 0);
									toggleMenu();
								}}
							>
								<LuHeart />
							</Link>
							<div className='navbar__wishlist-effect'>
								<span>My Wishlist</span>
							</div>

							<Link
								to='shop-cart'
								className='navbar__rightArea-cart'
								onClick={() => {
									window.scrollTo(0, 0);
									toggleMenu();
								}}
							>
								<PiShoppingCartSimpleBold />
								<span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
							</Link>
							<div className='navbar__cart-effect'>
								<span>Shopping Cart</span>
							</div>
						</div>
					</nav>

					<button className={`navbar__hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
						<span className='bar'></span>
						<span className='bar'></span>
						<span className='bar'></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
