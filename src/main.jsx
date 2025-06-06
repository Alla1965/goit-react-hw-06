import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'; 
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';



//Рендеринг React-додатка:
ReactDOM.createRoot(document.getElementById('root')).render(

// Provider передає store всім дочірнім компонентам через контекст.
  <React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				 <App />
			  </PersistGate>
	
	 </Provider>
 </React.StrictMode>
);

