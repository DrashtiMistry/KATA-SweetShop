
import React, { useState } from 'react';
import { addSweet } from '../api/sweetApi';
import { useNavigate } from 'react-router-dom';

const AddSweet = () => {
  const [form, setForm] = useState({
    name: '',
    imageUrl: '',
    description: '',
    pricePerKg: '',
    availableKg: '',
    category: 'Other',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSweet(form);
    navigate('/');
  };

  return (
    <div className='mb-10'>
      <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl space-y-4 border border-orange-200"
>
  <h2 className="text-2xl font-bold text-orange-600 text-center">Add New Sweet</h2>

  <input
    placeholder="Name"
    className="w-full p-3 border rounded-md border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    onChange={e => setForm({ ...form, name: e.target.value })}
    required
  />
  <input
    placeholder="Image URL"
    className="w-full p-3 border rounded-md border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    onChange={e => setForm({ ...form, imageUrl: e.target.value })}
    required
  />
  <textarea
    placeholder="Description"
    className="w-full p-3 border rounded-md border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    onChange={e => setForm({ ...form, description: e.target.value })}
  />
  <input
    type="number"
    placeholder="Price/kg"
    className="w-full p-3 border rounded-md border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    onChange={e => setForm({ ...form, pricePerKg: e.target.value })}
    required
  />
  <input
    type="number"
    placeholder="Available Kg"
    className="w-full p-3 border rounded-md border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    onChange={e => setForm({ ...form, availableKg: e.target.value })}
    required
  />
  <select
    className="w-full p-3 border rounded-md border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    onChange={e => setForm({ ...form, category: e.target.value })}
  >
    <option value="Dry Fruit">Dry Fruit</option>
    <option value="Milk-Based">Milk-Based</option>
    <option value="Bengali">Bengali</option>
    <option value="Festival Special">Festival Special</option>
    <option value="Other">Other</option>
  </select>
  <button
    type="submit"
    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-200"
  >
    Add Sweet
  </button>
</form>

    </div>
  );
};

export default AddSweet;
