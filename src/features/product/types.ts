export type Product = {
  _id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string;
  likes?: Object;
  ratings?: number;
  Stock?: number;
  numOfReviews?: number;
};

export type SearchProductParams = {
  sortBy: string;
  category: any;
  search?: any;
  page: number;
};

export interface ProductSliceStatus {
  items: Product[];
  status: 'success' | 'loading' | 'failed';
}
