export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: string;
  count: number;
};

export interface CartSliceStatus {
  totalPrice: number;
  items: CartItem[];
}
