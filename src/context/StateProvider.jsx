import { useState, useEffect } from 'react';
import { StateContext } from './StateContext';

// import News api
import { fetchNews } from '../api/api';

// import product data json
import Products from '../data/products.json';

export const StateProvider = ({ children }) => {
	//! State to control the homepage lightbox gallery
	const [toggler, setToggler] = useState(false);
	const openLightbox = index => {
		setToggler(index);
	};

	//! State to control the Mobile menu
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(open => !open);
	};

	//! State to control the news api
	/* const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchNews();
				setNews(data);
				console.log(news);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []); */

	//! State to control the products data json
	const [productsData, setProductsData] = useState(Products);
	const allProducts = [...productsData.computers, ...productsData.laptops, ...productsData.smartphones, ...productsData.accessories, ...productsData.components];

	//! State to control the sidebar on the product list page
	const [sidebarActive, setSidebarActive] = useState(false);
	const toggleSidebar = () => {
		setSidebarActive(sidebarActive => !sidebarActive);
	};

	//! State to control the pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [cardsPerPage, setCardsPerPage] = useState(12);

	//! State to control the filters
	const [filters, setFilters] = useState({
		/* category: path, */
		category: 'all',
		price: { min: null, max: null },
	});

	//! State to control the sorted products
	const [sortedProducts, setSortedProducts] = useState(allProducts.sort((a, b) => a.name.localeCompare(b.name)));

	//! State to check if no products are found on the filter
	const [noProductsFound, setNoProductsFound] = useState(false);

	//! State to control the order of the products
	const [sortOrder, setSortOrder] = useState('alphabetical');

	//! State to control the form data
	const [formData, setFormData] = useState(null);

	//! State to control the toast visibility
	const [showToast, setShowToast] = useState(true);

	//! State to control the scroll position
	const [scrollPosition, setScrollPosition] = useState(0);

	//! State to control the cart system
	const [cartItems, setCartItems] = useState([]);

	const addToCart = item => {
		setCartItems(prevCartItems => {
			const existingItem = prevCartItems.find(cartItem => cartItem.productId === item.productId);
			if (existingItem) {
				return prevCartItems.map(cartItem => (cartItem.productId === item.productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
			} else {
				return [...prevCartItems, { ...item, quantity: 1 }];
			}
		});
	};

	const updateCartQuantity = (itemId, quantity) => {
		setCartItems(prevCartItems => prevCartItems.map(cartItem => (cartItem.productId === itemId ? { ...cartItem, quantity } : cartItem)));
	};

	const removeFromCart = item => {
		setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem.productId !== item.productId));
	};

	const getSubtotal = () => {
		return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
	};

	const value = {
		toggler,
		isOpen,
		/* news, */
		allProducts,
		sidebarActive,
		currentPage,
		cardsPerPage,
		filters,
		sortedProducts,
		noProductsFound,
		sortOrder,
		formData,
		showToast,
		scrollPosition,
		cartItems,
		openLightbox,
		toggleMenu,
		toggleSidebar,
		setCurrentPage,
		setFilters,
		setSortedProducts,
		setNoProductsFound,
		setSortOrder,
		setFormData,
		setShowToast,
		setScrollPosition,
		addToCart,
		updateCartQuantity,
		removeFromCart,
		getSubtotal,
	};

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
