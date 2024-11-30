import { useState, useEffect } from 'react';
import { StateContext } from './StateContext';

// import News api
import { fetchNews } from '../api/api';

// import product data json
import Products from '../data/products.json';

// import toast tools
import { toast } from 'react-toastify';

export const StateProvider = ({ children }) => {
	//* Initial values for cart and wishlist local storage
	const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems')) || [];
	const wishlistItemsFromLocalStorage = JSON.parse(localStorage.getItem('wishlistItems')) || [];

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
	const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

	//! State to control the wishlist system
	const [wishlistItems, setWishlistItems] = useState(wishlistItemsFromLocalStorage);

	//! State to control the searchbar
	const [searchValue, setSearchValue] = useState('');

	//! State to control the sub categories
	const [subCategory, setSubCategory] = useState('');

	//! State to control the specs creation
	const [specs, setSpecs] = useState({
		cpu: '',
		cpuSpeed: '',
		gpu: '',
		ram: '',
		storage: '',
		os: '',
		screenSize: '',
		screenResolution: '',
		camera: '',
		sensor: '',
		dpi: '',
		conectivity: '',
		refreshRate: '',
		displayType: '',
		keyboardType: '',
		range: '',
		frequency: '',
		chipset: '',
		cpuSupport: [],
		motherboardConnectivity: [],
		osSupported: [],
		cache: '',
		internalGpu: '',
		threads: '',
		cores: '',
		cpuFrequency: '',
		cpuFrequencyTurbo: '',
		memoryType: '',
		clockSpeed: '',
		vram: '',
		interface: '',
		opengl: '',
		directx: '',
		coolerType: '',
		fans: '',
		readSpeed: '',
		writeSpeed: '',
	});

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

	//* Function to activate the wishlist toast
	const wishlistToast = item => {
		if (wishlistItems.some(wishlistItem => wishlistItem.id === item.id)) {
			toast.error('You already have this product in your wishlist', {
				pauseOnHover: false,
				draggable: true,
			});
		} else {
			toast('Product added to your wishlist!', {
				pauseOnHover: false,
				draggable: true,
			});
		}
	};

	//* Function to activate the cart toast
	const cartToast = () =>
		toast.success('Product added to your cart!', {
			pauseOnHover: false,
			draggable: true,
		});

	//* Function that adds an item to the cart
	const addToCart = item => {
		setCartItems(prevCartItems => {
			const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
			// if item exists, update the quantity in the cart
			if (existingItem) {
				localStorage.setItem('cartItems', JSON.stringify(prevCartItems.map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem))));

				return prevCartItems.map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem));
			} else {
				localStorage.setItem('cartItems', JSON.stringify([...prevCartItems, item]));

				return [...prevCartItems, { ...item }];
			}
		});
	};

	//* Function that adds an item to the wishlist
	const addToWishlist = item => {
		setWishlistItems(prevWishlistItems => {
			const isItemInWishlist = prevWishlistItems.some(wishlistItem => wishlistItem.id === item.id);
			if (!isItemInWishlist) {
				localStorage.setItem('wishlistItems', JSON.stringify([...prevWishlistItems, item]));

				return [...prevWishlistItems, { ...item }];
			} else {
				localStorage.setItem('wishlistItems', JSON.stringify(prevWishlistItems));

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

	//* Function to reset the specs on the product editor
	const resetSpecs = () => {
		setSpecs({
			cpu: '',
			cpuSpeed: '',
			gpu: '',
			ram: '',
			storage: '',
			os: '',
			screenSize: '',
			screenResolution: '',
			camera: '',
			sensor: '',
			dpi: '',
			conectivity: '',
			refreshRate: '',
			displayType: '',
			keyboardType: '',
			range: '',
			frequency: '',
			chipset: '',
			cpuSupport: [],
			motherboardConnectivity: [],
			osSupported: [],
			cache: '',
			internalGpu: '',
			threads: '',
			cores: '',
			cpuFrequency: '',
			cpuFrequencyTurbo: '',
			memoryType: '',
			clockSpeed: '',
			vram: '',
			interface: '',
			opengl: '',
			directx: '',
			coolerType: '',
			fans: '',
			readSpeed: '',
			writeSpeed: '',
		});
	};

	//* Function to handle the addition of specs into an array
	const handleAddToArray = (field, value) => {
		setSpecs(prevSpecs => ({
			...prevSpecs,
			[field]: [...prevSpecs[field], value],
		}));
	};

	//* Function to handle the removal of specs from an array
	const handleRemoveFromArray = (field, index) => {
		setSpecs(prevSpecs => ({
			...prevSpecs,
			[field]: prevSpecs[field].filter((_, i) => i !== index),
		}));
	};

	//* Function to handle the change of specs in an array
	const handleArrayInputChange = (field, index, value) => {
		setSpecs(prevSpecs => {
			const updatedArray = [...prevSpecs[field]];
			updatedArray[index] = value;
			return {
				...prevSpecs,
				[field]: updatedArray,
			};
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
		wishlistItems,
		searchValue,
		subCategory,
		specs,
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
		cartToast,
		wishlistToast,
		addToCart,
		setWishlistItems,
		addToWishlist,
		handleCategoryClick,
		setSearchValue,
		setSubCategory,
		setSpecs,
		resetSpecs,
		handleAddToArray,
		handleRemoveFromArray,
		handleArrayInputChange,
	};

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
