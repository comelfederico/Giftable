
import React, { useState, useMemo } from 'react';
import { Wishlist, Item, Category, Occasion } from '../types';
import WishlistItem from './WishlistItem';
import FilterControls from './FilterControls';
import { LockClosedIcon, GlobeAltIcon } from './icons';

interface WishlistProps {
  wishlist: Wishlist;
  items: Item[];
}

const WishlistComponent: React.FC<WishlistProps> = ({ wishlist, items }) => {
  const [filters, setFilters] = useState({
    price: Infinity,
    category: 'all',
    occasion: 'all',
  });

  const availableCategories = useMemo(() => Array.from(new Set(items.map(item => item.category))), [items]);
  const availableOccasions = useMemo(() => Array.from(new Set(items.map(item => item.occasion))), [items]);

  const filteredAndSortedItems = useMemo(() => {
    return items
      .sort((a, b) => b.rating - a.rating) // Sort by rating descending (highest first)
      .filter(item => {
        const priceMatch = item.estimatedPrice <= filters.price;
        const categoryMatch = filters.category === 'all' || item.category === filters.category;
        const occasionMatch = filters.occasion === 'all' || item.occasion === filters.occasion;
        return priceMatch && categoryMatch && occasionMatch;
      });
  }, [items, filters]);

  const VisibilityIcon = wishlist.visibility === 'public' ? GlobeAltIcon : LockClosedIcon;

  return (
    <section className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gray-800/70 border-b border-gray-700">
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">{wishlist.title}</h3>
            <div className="flex items-center space-x-2 text-gray-400 text-sm capitalize">
                <VisibilityIcon className="h-5 w-5" />
                <span>{wishlist.visibility.replace('_', ' ')}</span>
            </div>
        </div>
      </div>
      
      <div className="p-6">
        <FilterControls
          filters={filters}
          setFilters={setFilters}
          categories={availableCategories}
          occasions={availableOccasions}
        />
      </div>

      <div className="p-6 pt-0">
        {filteredAndSortedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedItems.map(item => (
              <WishlistItem key={item.itemId} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-6 bg-gray-900/50 rounded-lg">
            <p className="text-gray-400">No items match the current filters.</p>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your filter settings.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WishlistComponent;
