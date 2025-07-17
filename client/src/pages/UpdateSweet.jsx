import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSweetById, updateSweet } from '../api/sweetApi';

const UpdateSweet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    getSweetById(id).then(res => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateSweet(id, form);
    navigate('/');
  };

  return (
    <div className="flex justify-center p-6 bg-orange-50">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-2xl p-8 rounded-2xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600">Update Sweet Details</h2>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Sweet Name</label>
          <input 
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={form.name || ''} 
            onChange={e => setForm({ ...form, name: e.target.value })} 
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Image URL</label>
          <input 
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={form.imageUrl || ''} 
            onChange={e => setForm({ ...form, imageUrl: e.target.value })} 
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea 
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={3}
            value={form.description || ''} 
            onChange={e => setForm({ ...form, description: e.target.value })} 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Price per Kg</label>
            <input 
              type='number'
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.pricePerKg || ''} 
              onChange={e => setForm({ ...form, pricePerKg: e.target.value })} 
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Available Kg</label>
            <input 
              type='number'
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.availableKg || ''} 
              onChange={e => setForm({ ...form, availableKg: e.target.value })} 
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Category</label>
          <select 
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={form.category || ''} 
            onChange={e => setForm({ ...form, category: e.target.value })}
          >
            <option value=''>-- Select --</option>
            <option value='Dry Fruit'>Dry Fruit</option>
            <option value='Milk-Based'>Milk-Based</option>
            <option value='Bengali'>Bengali</option>
            <option value='Festival Special'>Festival Special</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <button 
          type='submit' 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition duration-300"
        >
          Update Sweet
        </button>
      </form>
    </div>
  );
};

export default UpdateSweet;
