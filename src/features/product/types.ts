export type Product = {
  _id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: Object;
  likes?: Object;
  ratings?: number;
  Stock?: number;
  numOfReviews?: number;
};

export type SearchProductParams = {
  sort: string;
  category: string;
  search: string;
  page: number;
};

export interface ProductSliceStatus {
  items: Product[];
  status: 'success' | 'loading' | 'failed';
}
