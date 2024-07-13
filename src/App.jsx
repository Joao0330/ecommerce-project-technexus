// import hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import styles
import './styles/main.scss';

// Import components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Import Pages
import Home from './pages/home/Home.jsx';
import ProductList from './pages/product-list/ProductList.jsx';
import ProductDetails from './pages/product-details/ProductDetails.jsx';
import Contact from './pages/contact/Contact.jsx';
import ShopCart from './pages/shop-cart/ShopCart.jsx';
import Wishlist from './pages/wishlist/Wishlist.jsx';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<header>
					<Navbar />
				</header>

				<main>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/product-list' element={<ProductList />}>
							<Route path='/product-list/:category' element={<ProductList />} />
						</Route>
						<Route path='/product-details' element={<ProductDetails />}>
							<Route path='/product-details/:id/:name' element={<ProductDetails />} />
						</Route>
						<Route path='/contact' element={<Contact />} />
						<Route path='/shop-cart' element={<ShopCart />} />
						<Route path='/wishlist' element={<Wishlist />} />
					</Routes>
				</main>

				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</>
	);
};

export default App;
