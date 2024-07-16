import { useState, useEffect } from 'react';
import { StateContext } from './StateContext';

// import News api
import { fetchNews } from '../api/api';

// import product data json
import Products from '../data/products.json';
import { SiTruenas } from 'react-icons/si';

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

	//! State to control the form toast visibility
	const [showFormToast, setShowFormToast] = useState(true);

	//! State to control the scroll position
	const [scrollPosition, setScrollPosition] = useState(0);

	//! State to control the cart system
	const [cartItems, setCartItems] = useState([]);

	// function that adds an item to the cart
	const addToCart = item => {
		setCartItems(prevCartItems => {
			const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
			// if item exists, update the quantity in the cart
			if (existingItem) {
				return prevCartItems.map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem));
			} else {
				return [...prevCartItems, { ...item }];
			}
		});
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
		showFormToast,
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
		setShowFormToast,
		setScrollPosition,
		setCartItems,
		addToCart,
	};

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
