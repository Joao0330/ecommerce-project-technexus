// import images
import Iphone15ProMax from '../../assets/products/smartphones/iphone15-pro-max.jpg';


const WishlistTableItem = () => {
	return (
		<tr>
			<td>
				<button type='button'>X</button>
			</td>
			<td>
				<img src={Iphone15ProMax} alt='Image of an Iphone 15 Pro Max' className='img-fluid' />
			</td>
			<td>Apple iPhone 15 Pro Max 6.7&quot; 256GB Natural Titanium</td>
			<td>€1.235,01</td>
		</tr>
	);
};

export default WishlistTableItem;
