export interface ISortOptions {
  type: string;
  direction: string;
}

export enum directions {
  ascending = "ASC",
  descending = "DESC"
}

export enum sortTypes {
  alpha = "Alpha",
  price = "Price"
}
