import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx'; // ✅ Import provider
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* ✅ Wrap App inside CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
