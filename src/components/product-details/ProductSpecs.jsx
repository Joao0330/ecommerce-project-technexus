import { keyModifications } from './key-modifications';

const ProductSpecs = ({ product }) => {
	return (
		product.specs && (
			<section className='productSpecs'>
				<div className='container'>
					<div className='productSpecs__wrapper'>
						<div>
							<h4>Specifications</h4>
							<ul>
								{Object.entries(product.specs).map(([key, value]) => {
									const modifiedKey = keyModifications.find(modification => modification.key === key)?.modifiedKey || key;
									return (
										<li key={key}>
											<span>{modifiedKey}</span>
											<span>
												{Array.isArray(value) ? (
													<ul>
														{value.map((item, index) => (
															<li key={index} className='productSpecs__listItem-spec'>
																{item}
															</li>
														))}
													</ul>
												) : (
													<span>{value}</span>
												)}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	);
};

export default ProductSpecs;
