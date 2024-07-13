// import context
import { useStates } from '../../context/useStates';

// import icons
import { MdMenuOpen } from 'react-icons/md';
import { CiWarning } from 'react-icons/ci';

const ErrorPage = () => {
	const { toggleSidebar } = useStates();

	return (
		<div className='productList__content-error'>
			<div>
				<button className='sidebar-toggle' type='button' onClick={toggleSidebar}>
					<MdMenuOpen />
				</button>
				<span>Menu</span>
			</div>

			<h2>No products were found</h2>
			<CiWarning className='productList__content-error-icon' />
		</div>
	);
};

export default ErrorPage;
