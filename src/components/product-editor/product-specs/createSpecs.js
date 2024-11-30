export const createSpecs = (category, subCategory, specs) => {
	switch (category) {
		case 'computers':
			return {
				cpu: specs.cpu,
				cpuSpeed: specs.cpuSpeed,
				gpu: specs.gpu,
				ram: specs.ram,
				storage: specs.storage,
				os: specs.os,
			};
		case 'laptops':
			return {
				cpu: specs.cpu,
				cpuSpeed: specs.cpuSpeed,
				gpu: specs.gpu,
				ram: specs.ram,
				storage: specs.storage,
				os: specs.os,
			};
		case 'smartphones':
			return {
				screenSize: specs.screenSize,
				screenResolution: specs.screenResolution,
				camera: specs.camera,
				os: specs.os,
				cpu: specs.cpu,
				ram: specs.ram,
				storage: specs.storage,
			};
	}

	switch (subCategory) {
		case 'mouse':
			return {
				sensor: specs.sensor,
				dpi: specs.dpi,
				conectivity: specs.conectivity,
			};
		case 'monitor':
			return {
				screenSize: specs.screenSize,
				screenResolution: specs.screenResolution,
				refreshRate: specs.refreshRate,
				displayType: specs.displayType,
				conectivity: specs.conectivity,
			};
		case 'keyboard':
			return {
				conectivity: specs.conectivity,
				range: specs.range,
				keyboardType: specs.keyboardType,
			};
		case 'headphones':
			return {
				conectivity: specs.conectivity,
				frequency: specs.frequency,
			};
		case 'motherboard':
			return {
				chipset: specs.chipset,
				cpuSupport: specs.cpuSupport,
				motherboardConnectivity: specs.motherboardConnectivity,
				osSupported: specs.osSupported,
			};
		case 'cpu':
			return {
				cache: specs.cache,
				internalGpu: specs.internalGpu,
				threads: specs.threads,
				cores: specs.cores,
				cpuFrequency: specs.cpuFrequency,
				cpuFrequencyTurbo: specs.cpuFrequencyTurbo,
			};
		case 'ram':
			return {
				ram: specs.ram,
				memoryType: specs.memoryType,
				clockSpeed: specs.clockSpeed,
			};
		case 'gpu':
			return {
				vram: specs.vram,
				memoryType: specs.memoryType,
				conectivity: specs.conectivity,
				interface: specs.interface,
				clockSpeed: specs.clockSpeed,
				opengl: specs.opengl,
				directx: specs.directx,
			};
		case 'cooler':
			return {
				coolerType: specs.coolerType,
				fans: specs.fans,
			};
		case 'storage':
			return {
				storage: specs.storage,
				readSpeed: specs.readSpeed,
				writeSpeed: specs.writeSpeed,
			};
		default:
			return {};
	}
};
