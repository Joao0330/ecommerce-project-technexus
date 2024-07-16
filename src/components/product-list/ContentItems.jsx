// import context
import { useStates } from '../../context/useStates';

// import hooks
import { useEffect } from 'react';

// import components
import ErrorPage from './ErrorPage';
import ProductCard from '../ProductCard';
import Pagination from './Pagination';

// import icons
import { LuArrowLeftFromLine } from 'react-icons/lu';
import { RiSortAlphabetAsc } from 'react-icons/ri';

const Content = ({ currentCards, handleSortOrderChange }) => {
	const {
		sidebarActive,
		noProductsFound,
		toggleSidebar,
		sortedProducts,
		setSortedProducts,
		cardsPerPage,
		setCurrentPage,
		currentPage,
		filters,
		allProducts,
		sortOrder,
		setNoProductsFound,
	} = useStates();

	// Filtering
	useEffect(() => {
		let filteredProducts;

		if (filters.category === 'all') {
			filteredProducts = allProducts;
		} else {
			filteredProducts = allProducts.filter(product => product.category === filters.category);
		}

		// Filter the products based on the values defined in the price filters
		if (filters.price.min !== null) {
			filteredProducts = filteredProducts.filter(product => {
				const price = product.price;
				return price >= filters.price.min && (filters.price.max === null || price <= filters.price.max);
			});
		}

		// Sorts the products by lowest price, highest price or alphabetically (for the filter buttons on the right side)
		const sorted = filteredProducts.sort((a, b) => {
			if (sortOrder === 'asc') {
				return a.price - b.price;
			} else if (sortOrder === 'desc') {
				return b.price - a.price;
			} else if (sortOrder === 'alphabetical') {
				return a.name.localeCompare(b.name);
			}
		});

		// Updates the order of the sorted products only if it has changed
		if (JSON.stringify(sorted) !== JSON.stringify(sortedProducts)) {
			setSortedProducts(sorted);
		}

		// Check if no products were found
		setNoProductsFound(filteredProducts.length === 0);
	}, [filters, allProducts, setSortedProducts, sortedProducts, setNoProductsFound, sortOrder]);

	return (
		<div className={`productList__content ${sidebarActive ? 'active' : ''}`}>
			{noProductsFound ? (
				<ErrorPage />
			) : (
				<>
					<div className='productList__content-top'>
						<div>
							<button className='sidebar-toggle' type='button' onClick={toggleSidebar}>
								<LuArrowLeftFromLine />
							</button>
							<h2>Products</h2>
							<p>Check out our collection of products:</p>
						</div>

						<div>
							<h3>Sort by:</h3>
							<div>
								<button className={sortOrder === 'asc' ? 'active' : ''} type='button' onClick={() => handleSortOrderChange('asc')}>
									Lowest Price
								</button>
								<button className={sortOrder === 'desc' ? 'active' : ''} type='button' onClick={() => handleSortOrderChange('desc')}>
									Highest Price
								</button>
								<button className={sortOrder === 'alphabetical' ? 'active' : ''} type='button' onClick={() => handleSortOrderChange('alphabetical')}>
									<RiSortAlphabetAsc />
								</button>
							</div>
						</div>
					</div>

					<div className={`productList__content-items ${sidebarActive ? 'active' : ''}`}>
						{currentCards.map(product => (
							<ProductCard key={product.id} image={product.image} title={product.name} category={product.category} price={product.price.toFixed(2)} productId={product.id} />
						))}
					</div>
				</>
			)}

			<Pagination totalCards={sortedProducts.length} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
		</div>
	);
};

export default Content;
