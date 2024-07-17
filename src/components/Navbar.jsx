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
	const { isOpen, toggleMenu, setFilters, scrollPosition, setScrollPosition, cartItems } = useStates();

	// Redirects to the category 'all' in the product list page
	const handleCategoryClick = () => {
		window.scrollTo(0, 0);
		setFilters(prevFilters => ({
			...prevFilters,
			price: { min: null, max: null },
			category: 'all',
		}));
	};

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
							<button className='navbar__theme'>
								<FaRegMoon />
							</button>

							<Link to='wishlist' className='navbar__rightArea-wishlist'>
								<LuHeart />
							</Link>

							<Link to='shop-cart' className='navbar__rightArea-cart' onClick={() => window.scrollTo(0, 0)}>
								<PiShoppingCartSimpleBold />
								<span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
							</Link>
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
