// import context
import { useStates } from '../../../context/useStates';

// import components
import SidebarInput from '../../../components/product-list/SidebarInput';

const Price = ({ handlePriceChange }) => {
	const { filters } = useStates();

	return (
		<div className='productList-sidebar-category'>
			<h3>Price Range</h3>

			<div>
				<SidebarInput handleChange={event => handlePriceChange('all')} value='all' title='All' name='category2' active={filters.price.min === null && filters.price.max === null ? 'active' : ''} />

				<SidebarInput
					handleChange={event => handlePriceChange({ min: 0, max: 200 })}
					value='€0 - €200'
					title='€0 - €200'
					name='category2'
					active={filters.price.min === 0 && filters.price.max === 200 ? 'active' : ''}
				/>
				<SidebarInput
					handleChange={event => handlePriceChange({ min: 200, max: 400 })}
					value='€200 - €400'
					title='€200 - €400'
					name='category2'
					active={filters.price.min === 200 && filters.price.max === 400 ? 'active' : ''}
				/>
				<SidebarInput
					handleChange={event => handlePriceChange({ min: 400, max: 600 })}
					value='€400 - €600'
					title='€400 - €600'
					name='category2'
					active={filters.price.min === 400 && filters.price.max === 600 ? 'active' : ''}
				/>
				<SidebarInput
					handleChange={event => handlePriceChange({ min: 600, max: 800 })}
					value='€600 - €800'
					title='€600 - €800'
					name='category2'
					active={filters.price.min === 600 && filters.price.max === 800 ? 'active' : ''}
				/>
				<SidebarInput
					handleChange={event => handlePriceChange({ min: 800, max: 1000 })}
					value='€800 - €1000'
					title='€800 - €1000'
					name='category2'
					active={filters.price.min === 800 && filters.price.max === 1000 ? 'active' : ''}
				/>
				<SidebarInput
					handleChange={event => handlePriceChange({ min: 1000, max: 9000 })}
					value='€1000 - Above'
					title='€1000 - Above'
					name='category2'
					active={filters.price.min === 1000 && filters.price.max === 9000 ? 'active' : ''}
				/>
			</div>
		</div>
	);
};

export default Price;
