export interface CategoryState {
  selectedCategory: string | null;
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
  photo: string
  selectedSize?: string | null;
}

export interface CartState {
  cartItems: CartItem[];
  selectedSize?: string | null;
}
export interface FavoriteItem {
  productName?: string;
  productImage?: string;
  productRate?: number;
  productPrice?: string;
  id: string
  isFavorite?: boolean;
}
export interface FavoriteState {
  favoriteItems: FavoriteItem[];
  isFavorite?: boolean;
}