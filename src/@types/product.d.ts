declare type Product = {
  id: string;
  price: Nullable<number>;
  name: string;
  quantity?: number | 1;
  image: string;
  description: Nullable<string>;
  currency?: string;
};
