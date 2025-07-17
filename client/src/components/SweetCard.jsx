import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { reduceQuantity } from "../api/sweetApi";

const SweetCard = ({ sweet }) => {
  const { addToCart } = useCart();
  const [availableKg, setAvailableKg] = useState(sweet.availableKg);

  const handleAddToCart = async () => {
    if (availableKg < 1) return;

    try {
      const { data: updatedSweet } = await reduceQuantity(sweet._id);
      setAvailableKg(updatedSweet.availableKg);
      addToCart(updatedSweet);
    } catch (error) {
      alert("Could not add to cart. Try again.");
    }
  };

  return (
    <div className="w-90 bg-white shadow-md rounded-xl border border-orange-100 hover:shadow-lg transition">
      <img
        src={sweet.imageUrl}
        alt={sweet.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-orange-700 mb-2">
          {sweet.name}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium text-gray-700">Category:</span>{" "}
          {sweet.category}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium text-gray-700">Price:</span> ₹
          {sweet.pricePerKg}/kg
        </p>
        <p
          className={`text-sm font-medium ${
            availableKg > 0 ? "text-green-600" : "text-red-500"
          } mb-4`}
        >
          Available: {availableKg} kg
        </p>

        <div className="flex flex-wrap gap-2">
          <Link to={`/sweet/${sweet._id}`} className="flex-1">
            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-1.5 rounded-md text-sm transition">
              View
            </button>
          </Link>

          <button
            onClick={handleAddToCart}
            disabled={availableKg < 1}
            className={`flex-1 ${
              availableKg < 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 text-white"
            } font-semibold py-1.5 rounded-md text-sm transition`}
          >
            {availableKg > 0 ? "Buy" : "Out of Stock"}
          </button>

          <Link to={`/update/${sweet._id}`} className="flex-1">
            <button className="w-full bg-white border border-orange-400 text-orange-500 hover:bg-orange-50 font-semibold py-1.5 rounded-md text-sm transition">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SweetCard;
