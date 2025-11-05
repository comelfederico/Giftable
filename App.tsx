
import React from 'react';
import { mockUser, mockWishlists, mockItems } from './data/mockData';
import UserProfile from './components/UserProfile';
import { GiftIcon } from './components/icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <GiftIcon className="h-8 w-8 text-indigo-400" />
              <h1 className="text-2xl font-bold tracking-tight text-gray-100">
                Giftable
              </h1>
            </div>
            <p className="text-sm text-gray-400">Data Model Viewer</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <UserProfile user={mockUser} wishlists={mockWishlists} items={mockItems} />
      </main>

       <footer className="text-center py-6 text-sm text-gray-500">
          <p>Built by a world-class senior frontend React engineer.</p>
        </footer>
    </div>
  );
};

export default App;
