// import context
import { useStates } from '../context/useStates';

// import hooks
import { Link, useNavigate } from 'react-router-dom';

// import Icons
import { IoSearchOutline } from 'react-icons/io5';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { LuHeart } from 'react-icons/lu';

const Navbar = () => {
	const { isOpen, toggleMenu, scrollPosition, setScrollPosition, cartItems, wishlistItems, handleCategoryClick, searchValue, setSearchValue, allProducts } = useStates();

	const navigate = useNavigate();

	// Adds active class to the navbar when scrolled down
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};
	window.addEventListener('scroll', handleScroll);

	// Function to handle the search
	const searchProduct = searchTerm => {
		setSearchValue(searchTerm);

		// Find the product that matches the search term
		const product = allProducts.find(item => item.name.toLowerCase() === searchTerm.toLowerCase());

		if (product) {
			// Navigate to the product-details page of the matched product
			navigate(`/product-details/${product.id}/${encodeURIComponent(product.name)}`);
			window.scrollTo(0, 0);
			setSearchValue('');
		} else {
			navigate('/product-not-found');
			window.scrollTo(0, 0);
			setSearchValue('');
		}
	};

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
							<input
								type='text'
								placeholder='Search for products ...'
								value={searchValue}
								onChange={event => {
									setSearchValue(event.target.value);
								}}
							/>
							<button
								type='submit'
								onClick={e => {
									e.preventDefault();
									searchProduct(searchValue);
								}}
							>
								<IoSearchOutline />
							</button>

							{searchValue &&
								// First filter to check if there are any matching products in the allProducts array based on the search term
								allProducts.filter(item => {
									const searchTerm = searchValue.toLowerCase();
									const productName = item.name.toLowerCase();

									return productName.includes(searchTerm) && productName !== searchTerm;
								}).length > 0 && (
									// Only display the dropdown if there are matching products based on the search term
									<div className='navbar__search-dropdown'>
										{allProducts
											// To actually display the filtered products
											.filter(item => {
												const searchTerm = searchValue.toLowerCase();
												const productName = item.name.toLowerCase();

												return productName.includes(searchTerm) && productName !== searchTerm;
											})
											.map(item => (
												<div onClick={() => setSearchValue(item.name)} className='navbar__search-dropdown-row' key={item.id}>
													<img src={item.image} alt={item.name} className='img-fluid' />
													{item.name}
												</div>
											))}
									</div>
								)}
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
								<span>{wishlistItems.length}</span>
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
