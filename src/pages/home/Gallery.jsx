// Import context
import { useStates } from '../../context/useStates';

// import FsLightbox library
import FsLightbox from 'fslightbox-react';

// Import images
import Gallery1 from '../../assets/gallery/gallery-1.jpg';
import Gallery2 from '../../assets/gallery/gallery-2.jpg';
import Gallery3 from '../../assets/gallery/gallery-3.jpg';
import Gallery4 from '../../assets/gallery/gallery-4.jpg';
import Gallery5 from '../../assets/gallery/gallery-5.jpg';
import Gallery6 from '../../assets/gallery/gallery-6.jpg';
import Gallery7 from '../../assets/gallery/gallery-7.jpg';
import Gallery8 from '../../assets/gallery/gallery-8.jpg';

// import components
import GaleryItem from '../../components/home/GaleryItem';

const Gallery = () => {
	const { toggler, openLightbox } = useStates();

	const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8];

	return (
		<section className='gallery'>
			<div className='container'>
				<div className='gallery__wrapper'>
					<div className='gallery__title'>
						<h2>Product Showcase</h2>
						<p>Get a closer look at our latest computer models and accessories.</p>
					</div>

					<div className='gallery__content'>
						{galleryImages.map((image, index) => (
							<GaleryItem key={index} img={image} openLightbox={() => openLightbox(index)} />
						))}

						<FsLightbox toggler={toggler} sources={galleryImages} sourceIndex={toggler} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
