
export enum Category {
  Tech = "Tech",
  Books = "Books",
  Experiences = "Experiences",
  Fashion = "Fashion",
  HomeGoods = "Home Goods",
  Games = "Games",
  Art = "Art & Collectibles"
}

export enum Occasion {
  Birthday = "Birthday",
  Graduation = "Graduation",
  Anniversary = "Anniversary",
  Holiday = "Holiday",
  JustBecause = "Just Because",
  Housewarming = "Housewarming"
}

export enum Visibility {
  Public = "public",
  FriendsOnly = "friends_only",
}

export interface Profile {
  firstName: string;
  lastName:string;
  birthDate: string; 
}

export interface User {
  userId: string;
  username: string;
  email: string;
  profile: Profile;
}

export interface Item {
  itemId: string;
  wishlistId: string;
  itemName: string;
  description?: string;
  purchaseLink?: string;
  estimatedPrice: number;
  category: Category;
  occasion: Occasion;
  rating: number; // 1-10
}

export interface Wishlist {
  wishlistId: string;
  ownerId: string;
  title: string;
  visibility: Visibility;
}
