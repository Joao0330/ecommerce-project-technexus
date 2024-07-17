// import context
import { useStates } from '../../context/useStates';

// import hooks
import { Link } from 'react-router-dom';

// Import images
import heroimg from '../../assets/hero.jpg';

const Hero = () => {
	const { handleCategoryClick } = useStates();

	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero__wrapper'>
					<div className='hero__content-left'>
						<h2>Welcome to TechNexus</h2>
						<h3>Unleash Your Potential with Our Innovative Gadgets</h3>
						<Link to='/product-list/all' onClick={handleCategoryClick} className='btn-type1'>
							Shop Now
						</Link>
					</div>

					<div className='hero__content-right'>
						<img src={heroimg} alt='An image of computer gadgets' className='img-fluid' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
