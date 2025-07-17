
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-12">
      <h2 className="text-2xl font-bold mb-10 text-center text-orange-700">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty. Go add some sweets! </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <CartItem key={item._id} sweet={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
