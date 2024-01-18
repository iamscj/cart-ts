export interface ItemType {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
  quantity: number;
}

export interface localStorageItemType {
  id: number;
  quantity: number;
}

export interface StoreItemType {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
}

export type ResponsiveAppBarProps = {
  pages: string[];
  settings: string[];
};

export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
  quantity: number;
}

export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  imgUrl: string[];
};
