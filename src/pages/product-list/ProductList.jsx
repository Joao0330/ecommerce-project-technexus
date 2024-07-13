// import context
import { useStates } from '../../context/useStates';

// import components
import Category from './sidebar/Category';
import Price from './sidebar/Price';
import ContentItems from '../../components/product-list/ContentItems';

const ProductList = () => {
	const { sidebarActive, toggleSidebar, currentPage, setCurrentPage, cardsPerPage, sortedProducts, setFilters, setSortOrder } = useStates();

	// Pagination
	const lastCardIndex = currentPage * cardsPerPage;
	const firstCardIndex = lastCardIndex - cardsPerPage;
	const currentCards = sortedProducts.slice(firstCardIndex, lastCardIndex);

	// Functions that handle the change in the category filter
	const handleCategoryChange = event => {
		setFilters(prevFilters => ({
			...prevFilters,
			category: event,
		}));
		setCurrentPage(1);
	};

	// Functions that handle the change in the price filter
	const handlePriceChange = event => {
		if (event === 'all') {
			setFilters(prevFilters => ({
				...prevFilters,
				price: { min: null, max: null },
			}));
		} else {
			const min = event.min;
			const max = event.max;

			setFilters(prevFilters => ({
				...prevFilters,
				price: { min: min, max: max },
			}));
		}
		setCurrentPage(1);
	};

	// Functions that handle the sort order buttons on the right
	const handleSortOrderChange = newOrder => {
		setSortOrder(newOrder);
	};

	return (
		<section className='productList'>
			<div className='container'>
				<div className='productList__wrapper'>
					<aside className={sidebarActive ? 'active' : ''}>
						<Category sidebarToggle={toggleSidebar} handleCategoryChange={handleCategoryChange} />
						<Price handlePriceChange={handlePriceChange} />
					</aside>

					<ContentItems currentCards={currentCards} handleSortOrderChange={handleSortOrderChange} />
				</div>
			</div>
		</section>
	);
};

export default ProductList;
