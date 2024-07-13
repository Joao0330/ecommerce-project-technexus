// import context
import { useStates } from '../../../context/useStates';

// import components
import SidebarInput from '../../../components/product-list/SidebarInput';

// import icons
import { IoMdClose } from 'react-icons/io';

const Category = ({ sidebarToggle, handleCategoryChange }) => {
	const { filters } = useStates();

	return (
		<div className='productList-sidebar-category'>
			<div>
				<h3>Category</h3>
				<button className='sidebar-toggle' type='button' onClick={sidebarToggle}>
					<IoMdClose />
				</button>
			</div>

			<div>
				<SidebarInput handleChange={handleCategoryChange} value='all' title='All' name='category' active={filters.category === 'all' ? 'active' : ''} />

				<SidebarInput handleChange={handleCategoryChange} value='computers' title='Desktop Computers' name='category' active={filters.category === 'computers' ? 'active' : ''} />

				<SidebarInput handleChange={handleCategoryChange} value='laptops' title='Laptops' name='category' active={filters.category === 'laptops' ? 'active' : ''} />

				<SidebarInput handleChange={handleCategoryChange} value='smartphones' title='Smartphones' name='category' active={filters.category === 'smartphones' ? 'active' : ''} />

				<SidebarInput handleChange={handleCategoryChange} value='accessories' title='Accessories' name='category' active={filters.category === 'accessories' ? 'active' : ''} />

				<SidebarInput handleChange={handleCategoryChange} value='components' title='Components' name='category' active={filters.category === 'components' ? 'active' : ''} />
			</div>
		</div>
	);
};

export default Category;
