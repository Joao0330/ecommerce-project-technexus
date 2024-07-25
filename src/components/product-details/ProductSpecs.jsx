const ProductSpecs = ({ product }) => {
	// Changes the key names to more readable names
	const keyModifications = [
		{ key: 'cpu-support', modifiedKey: 'CPU Support' },
		{ key: 'conectivity', modifiedKey: 'Connectivity' },
		{ key: 'os-supported', modifiedKey: 'OS Supported' },
		{ key: 'cache', modifiedKey: 'Cache' },
		{ key: 'internal-gpu', modifiedKey: 'Internal GPU' },
		{ key: 'threads', modifiedKey: 'Threads' },
		{ key: 'cores', modifiedKey: 'Cores' },
		{ key: 'cpu-frequency', modifiedKey: 'CPU Frequency' },
		{ key: 'cpu-speed', modifiedKey: 'CPU Speed' },
		{ key: 'chipset', modifiedKey: 'Chipset' },
		{ key: 'gpu-memory', modifiedKey: 'GPU Memory' },
		{ key: 'gpu-memory-type', modifiedKey: 'GPU Memory Type' },
		{ key: 'sensor', modifiedKey: 'Sensor' },
		{ key: 'dpi', modifiedKey: 'DPI' },
		{ key: 'range', modifiedKey: 'Range' },
		{ key: 'screen-size', modifiedKey: 'Screen Size' },
		{ key: 'screen-resolution', modifiedKey: 'Screen Resolution' },
		{ key: 'camera', modifiedKey: 'Camera' },
		{ key: 'os', modifiedKey: 'OS' },
		{ key: 'cpu', modifiedKey: 'CPU' },
		{ key: 'gpu', modifiedKey: 'GPU' },
		{ key: 'ram', modifiedKey: 'RAM' },
		{ key: 'vram', modifiedKey: 'VRAM' },
		{ key: 'opengl', modifiedKey: 'OpenGL' },
		{ key: 'directx', modifiedKey: 'DirectX' },
		{ key: 'cooler-type', modifiedKey: 'Cooler Type' },
		{ key: 'fans', modifiedKey: 'Fans' },
		{ key: 'read-speed', modifiedKey: 'Read Speed' },
		{ key: 'write-speed', modifiedKey: 'Write Speed' },
		{ key: 'interface', modifiedKey: 'Interface' },
		{ key: 'storage', modifiedKey: 'Storage' },
		{ key: 'cpu-frequency-turbo', modifiedKey: 'CPU Frequency Turbo' },
		{ key: 'memory-type', modifiedKey: 'Memory Type' },
		{ key: 'clock-speed', modifiedKey: 'Clock Speed' },
		{ key: 'refresh-rate', modifiedKey: 'Refresh Rate' },
		{ key: 'display-type', modifiedKey: 'Display Type' },
		{ key: 'keyboard-type', modifiedKey: 'Keyboard Type' },
		{ key: 'frequency', modifiedKey: 'Frequency' },
	];

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
