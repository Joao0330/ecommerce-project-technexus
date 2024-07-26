// import context
import { useStates } from '../../context/useStates';

// import hooks
import { Link } from 'react-router-dom';

const Hero = () => {
	const { handleCategoryClick } = useStates();

	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero__wrapper'>
					<div className='hero__content'>
						<h2>Welcome to TechNexus</h2>
						<h3>Unleash Your Potential with Our Innovative Gadgets</h3>
						<Link to='/product-list/all' onClick={handleCategoryClick} className='btn-type1'>
							Shop Now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
