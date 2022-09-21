export enum SortPropertyEnum {
  OLDEST_DESC = "sort=oldest",
  SALES_ASC = "sort=-sold",
  PRICE_DESC = "sort=price",
  PRICE_ASC = "sort=-price",
}

export enum CategoryEnum {
  CATEGORY_KAY = "category="
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: string;
  currentPage: number;
  sort: Sort;
}
