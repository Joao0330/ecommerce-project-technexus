import { useState, useEffect } from 'react';
import { StateContext } from './StateContext';

// import News api
import { fetchNews } from '../api/api';

// import product data json
import Products from '../data/products.json';

export const StateProvider = ({ children }) => {
	//? ------------------STATE VARIABLES--------------------
	//! State to control the homepage lightbox gallery
	const [toggler, setToggler] = useState(false);

	//! State to control the Mobile menu
	const [isOpen, setIsOpen] = useState(false);

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
	const [allProducts, setAllProducts] = useState([...productsData.computers, ...productsData.laptops, ...productsData.smartphones, ...productsData.accessories, ...productsData.components]);

	//! State to control the sidebar on the product list page
	const [sidebarActive, setSidebarActive] = useState(false);

	//! State to control the pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [cardsPerPage, setCardsPerPage] = useState(12);

	//! State to control the filters
	const [filters, setFilters] = useState({
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

	//! State to control the wishlist system
	const [wishlistItems, setWishlistItems] = useState([]);

	//! State to control the searchbar
	const [searchValue, setSearchValue] = useState('');

	//? -------------------FUNCTIONS---------------------
	//* Function to control the mobile menu
	const toggleMenu = () => {
		setIsOpen(open => !open);
	};

	//* Function to control the lightbox gallery
	const openLightbox = index => {
		setToggler(index);
	};

	//* Function to control the sidebar on the products page
	const toggleSidebar = () => {
		setSidebarActive(sidebarActive => !sidebarActive);
	};

	//* Function that adds an item to the cart
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

	//* Function that adds an item to the wishlist
	const addToWishlist = item => {
		setWishlistItems(prevWishlistItems => {
			const isItemInWishlist = prevWishlistItems.some(wishlistItem => wishlistItem.id === item.id);
			if (!isItemInWishlist) {
				return [...prevWishlistItems, { ...item }];
			} else {
				return prevWishlistItems;
			}
		});
	};

	//* Function that redirects to the category 'all' in the product list page
	const handleCategoryClick = () => {
		window.scrollTo(0, 0);
		setFilters(prevFilters => ({
			...prevFilters,
			price: { min: null, max: null },
			category: 'all',
		}));
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
		wishlistItems,
		searchValue,
		openLightbox,
		toggleMenu,
		toggleSidebar,
		setCurrentPage,
		setAllProducts,
		setFilters,
		setSortedProducts,
		setNoProductsFound,
		setSortOrder,
		setFormData,
		setShowFormToast,
		setScrollPosition,
		setCartItems,
		addToCart,
		setWishlistItems,
		addToWishlist,
		handleCategoryClick,
		setSearchValue,
	};

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
