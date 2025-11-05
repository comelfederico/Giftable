
import React from 'react';

interface FilterControlsProps {
  filters: { price: number; category: string; occasion: string };
  setFilters: React.Dispatch<React.SetStateAction<{ price: number; category: string; occasion: string }>>;
  categories: string[];
  occasions: string[];
}

const priceOptions = [
  { label: 'Any Price', value: Infinity },
  { label: '< $25', value: 25 },
  { label: '< $50', value: 50 },
  { label: '< $100', value: 100 },
];

const FilterControls: React.FC<FilterControlsProps> = ({ filters, setFilters, categories, occasions }) => {
  const handleFilterChange = (key: 'price' | 'category' | 'occasion', value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  return (
    <div className="mb-6 p-4 bg-gray-900/50 rounded-lg space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
      {/* Price Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <label className="text-sm font-medium text-gray-300 mb-2 md:mb-0">Price</label>
        <div className="flex items-center space-x-2 bg-gray-800 p-1 rounded-md">
          {priceOptions.map(opt => (
            <button
              key={opt.label}
              onClick={() => handleFilterChange('price', opt.value)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                filters.price === opt.value
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'bg-transparent text-gray-300 hover:bg-gray-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category & Occasion Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div>
          <label htmlFor="category-filter" className="sr-only">Category</label>
          <select
            id="category-filter"
            value={filters.category}
            onChange={e => handleFilterChange('category', e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="occasion-filter" className="sr-only">Occasion</label>
          <select
            id="occasion-filter"
            value={filters.occasion}
            onChange={e => handleFilterChange('occasion', e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 mt-2 md:mt-0"
          >
            <option value="all">All Occasions</option>
            {occasions.map(occ => <option key={occ} value={occ}>{occ}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
