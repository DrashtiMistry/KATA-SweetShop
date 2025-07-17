import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className=" bg-orange-100 px-6 py-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">Sweet Shop</h1>
      <div className="space-x-4 text-lg font-medium">
        <Link
          to="/"
          className="transition duration-200 "
        >
          Home
        </Link>
        <Link
          to="/add"
          className="transition duration-200"
        >
          Add Sweet
        </Link>
        <Link
          to="/cart"
          className="transition duration-200"
        >
          Your Cart 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
