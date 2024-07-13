// Import icons
import { LiaSearchPlusSolid } from 'react-icons/lia';

const GaleryItem = ({ img, openLightbox }) => {
	return (
		<div className='gallery__content-card' onClick={openLightbox}>
			<img src={img} alt='Image of a technexus product' className='img-fluid' />
			<LiaSearchPlusSolid className='gallery__content-card-icon' />
		</div>
	);
};

export default GaleryItem;
