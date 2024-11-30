// import context
import { useStates } from '../../../context/useStates';

//import icons
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

const MotherboardSpecsForm = ({ specs, onSpecsChange }) => {
	const { handleAddToArray, handleRemoveFromArray, handleArrayInputChange } = useStates();

	return (
		<div className='productForm__specs'>
			<div>
				<label>Chipset:</label>
				<input type='text' value={specs.chipset} onChange={e => onSpecsChange({ ...specs, chipset: e.target.value })} placeholder='Enter the chipset specs' />
			</div>

			<div className='productForm__specs__fields'>
				<label>CPU Support:</label>
				<div>
					{specs.cpuSupport.map((cpu, index) => (
						<div key={index}>
							<input type='text' value={cpu} onChange={e => handleArrayInputChange('cpuSupport', index, e.target.value)} placeholder='Enter supported CPU' />
							<button type='button' onClick={() => handleRemoveFromArray('cpuSupport', index)}>
								<IoCloseOutline />
							</button>
						</div>
					))}
				</div>
				<button type='button' className='btn-type4' onClick={() => handleAddToArray('cpuSupport', '')}>
					<IoIosAddCircleOutline />
					<span>Add specs</span>
				</button>
			</div>
			<div className='productForm__specs__fields'>
				<label>Motherboard Connectivity:</label>
				<div>
					{specs.motherboardConnectivity.map((conn, index) => (
						<div key={index}>
							<input type='text' value={conn} onChange={e => handleArrayInputChange('motherboardConnectivity', index, e.target.value)} placeholder='Enter connectivity option' />
							<button type='button' onClick={() => handleRemoveFromArray('motherboardConnectivity', index)}>
								<IoCloseOutline />
							</button>
						</div>
					))}
				</div>
				<button type='button' className='btn-type4' onClick={() => handleAddToArray('motherboardConnectivity', '')}>
					<IoIosAddCircleOutline />
					<span>Add specs</span>
				</button>
			</div>

			<div className='productForm__specs__fields'>
				<label>OS Supported:</label>
				<div>
					{specs.osSupported.map((os, index) => (
						<div key={index}>
							<input type='text' value={os} onChange={e => handleArrayInputChange('osSupported', index, e.target.value)} placeholder='Enter supported OS' />
							<button type='button' onClick={() => handleRemoveFromArray('osSupported', index)}>
								<IoCloseOutline />
							</button>
						</div>
					))}
				</div>

				<button type='button' className='btn-type4' onClick={() => handleAddToArray('osSupported', '')}>
					<IoIosAddCircleOutline />
					<span>Add specs</span>
				</button>
			</div>
		</div>
	);
};

export default MotherboardSpecsForm;
