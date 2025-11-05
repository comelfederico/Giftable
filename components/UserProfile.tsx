
import React from 'react';
import { User, Wishlist, Item } from '../types';
import WishlistComponent from './Wishlist';
import { UserCircleIcon } from './icons';

interface UserProfileProps {
  user: User;
  wishlists: Wishlist[];
  items: Item[];
}

const UserProfile: React.FC<UserProfileProps> = ({ user, wishlists, items }) => {
  const userWishlists = wishlists.filter(w => w.ownerId === user.userId);

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
        <UserCircleIcon className="h-16 w-16 text-gray-500" />
        <div>
          <h2 className="text-3xl font-bold">{user.profile.firstName} {user.profile.lastName}</h2>
          <p className="text-gray-400">@{user.username}</p>
        </div>
      </div>
      
      <div className="space-y-12">
        {userWishlists.map(wishlist => {
          const wishlistItems = items.filter(item => item.wishlistId === wishlist.wishlistId);
          return (
            <WishlistComponent 
              key={wishlist.wishlistId} 
              wishlist={wishlist} 
              items={wishlistItems} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
