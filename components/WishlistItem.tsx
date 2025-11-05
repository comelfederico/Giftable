
import React from 'react';
import { Item } from '../types';
import { LinkIcon, StarIcon } from './icons';

interface WishlistItemProps {
  item: Item;
}

const getRatingColor = (rating: number) => {
  if (rating >= 8) return 'bg-green-500 text-green-900';
  if (rating >= 5) return 'bg-yellow-400 text-yellow-900';
  return 'bg-red-500 text-red-900';
};

const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-md hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col h-full border border-gray-700 hover:border-indigo-500/50">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-bold text-gray-100 mb-1 pr-4">{item.itemName}</h4>
          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg ${getRatingColor(item.rating)}`}>
            {item.rating}
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 text-xs mb-4">
            <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">{item.category}</span>
            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">{item.occasion}</span>
        </div>
      </div>

      <div className="px-5 py-4 bg-gray-900/60 rounded-b-lg mt-auto">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-white">${item.estimatedPrice}</p>
          {item.purchaseLink && (
            <a
              href={item.purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-300 bg-indigo-900/50 hover:bg-indigo-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-colors"
            >
              <LinkIcon className="h-4 w-4" />
              <span>Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
