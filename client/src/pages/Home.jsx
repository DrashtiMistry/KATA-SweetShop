import React, { useEffect, useState } from 'react';
import { getAllSweets } from '../api/sweetApi';
import SweetCard from '../components/SweetCard';
import SearchFilter from '../components/SearchFilter';

const Home = () => {
  const [sweets, setSweets] = useState([]);
  const [filters, setFilters] = useState({ name: '', category: '', minPrice: '', maxPrice: '' });

  useEffect(() => {
    getAllSweets().then(res => setSweets(res.data));
  }, []);

  const filteredSweets = sweets.filter(sweet => {
    return (
      sweet.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (!filters.category || sweet.category === filters.category) &&
      (!filters.minPrice || sweet.pricePerKg >= Number(filters.minPrice)) &&
      (!filters.maxPrice || sweet.pricePerKg <= Number(filters.maxPrice))
    );
  });

  return (
    <div className="p-6 min-h-screen ">
      <h1 className="text-4xl font-extrabold text-orange-700 mb-6 text-center tracking-wide drop-shadow">
        Our Sweet Collection
      </h1>
      
      <div className="mb-6">
        <SearchFilter filters={filters} setFilters={setFilters} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredSweets.length > 0 ? (
          filteredSweets.map(sweet => (
            <SweetCard key={sweet._id} sweet={sweet} />
          ))
        ) : (
          <div className="col-span-full text-center text-orange-500 text-lg font-medium">
            No sweets found. Try different filters!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
