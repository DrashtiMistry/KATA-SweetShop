import React from 'react';

const SearchFilter = ({ filters, setFilters }) => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between mb-6">

      <input
        type="text"
        placeholder="Search by name"
        value={filters.name}
        onChange={e => setFilters({ ...filters, name: e.target.value })}
        className="px-4 py-2 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full md:w-1/4"
      />

      <select
        value={filters.category}
        onChange={e => setFilters({ ...filters, category: e.target.value })}
        className="px-4 py-2 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full md:w-1/4"
      >
        <option value="">All Categories</option>
        <option value="Dry Fruit">Dry Fruit</option>
        <option value="Milk-Based">Milk-Based</option>
        <option value="Bengali">Bengali</option>
        <option value="Festival Special">Festival Special</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        onChange={e => setFilters({ ...filters, minPrice: e.target.value })}
        className="px-4 py-2 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full md:w-1/6"
      />

      <input
        type="number"
        placeholder="Max Price"
        onChange={e => setFilters({ ...filters, maxPrice: e.target.value })}
        className="px-4 py-2 rounded-md border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full md:w-1/6"
      />
    </div>
  );
};

export default SearchFilter;
