const Pagination = ({ totalCards, cardsPerPage, setCurrentPage, currentPage }) => {
	let pages = [];

	// Calculates the number of pages then pushes them into an array
	for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
		pages.push(i);
	}

	return (
		<div className='pagination'>
			{pages.map((page, index) => (
				<button
					className={`btn-type2 ${page === currentPage ? 'active' : ''}`}
					key={index}
					onClick={() => {
						setCurrentPage(page);
						window.scrollTo(0, 0);
					}}
				>
					{page}
				</button>
			))}
		</div>
	);
};

export default Pagination;
