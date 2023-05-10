import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import   CartProvider   from './context/CartContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
      <App />
    </CartProvider>
);