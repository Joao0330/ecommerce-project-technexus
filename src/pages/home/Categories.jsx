// import components
import CategoryCard from '../../components/home/CategoryCard';

// Images imports
import desktopImg from '../../assets/categories/desktop.jpg';
import laptopImg from '../../assets/categories/laptop.jpg';
import smartphoneImg from '../../assets/categories/smartphone.jpg';
import accessoriesImg from '../../assets/categories/accessories.jpg';
import componentsImg from '../../assets/categories/components.jpg';

const Categories = () => {
	return (
		<section className='categories'>
			<div className='container'>
				<div className='categories__wrapper'>
					<div className='categories__title'>
						<h2>Shop by Category</h2>
						<p>Browse all of our products by category</p>
					</div>

					<div className='categories__content'>
						<CategoryCard image={desktopImg} title='Desktop Computers' category='computers' />
						<CategoryCard image={laptopImg} title='Laptops' category='laptops' />
						<CategoryCard image={smartphoneImg} title='Smartphones' category='smartphones' />
						<CategoryCard image={accessoriesImg} title='Accessories' category='accessories' />
						<CategoryCard image={componentsImg} title='Components' category='components' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;
