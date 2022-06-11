import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import bootstrap from 'bootstrap';
import { CartProvider } from './Context/CartContext';
import { ProductsProvider } from './Context/ProductContext';
import { UserProvider } from './Context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/index.css';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
