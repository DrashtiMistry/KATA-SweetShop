
import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ sweet }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-4 my-3 bg-white rounded-xl shadow-md border border-orange-200 hover:shadow-lg transition duration-200">
      <div>
        <h4 className="text-lg font-semibold text-orange-700">{sweet.name}</h4>
        <p className="text-gray-600">₹{sweet.pricePerKg} / kg</p>
      </div>
      <button
        onClick={() => removeFromCart(sweet._id)}
        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
