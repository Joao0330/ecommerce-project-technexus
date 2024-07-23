import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { StateProvider } from './context/StateProvider.jsx';
import { ProductProvider } from './context/product-context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StateProvider>
			<ProductProvider>
				<App />
			</ProductProvider>
		</StateProvider>
	</React.StrictMode>,
);
