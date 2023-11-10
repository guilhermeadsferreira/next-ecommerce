declare type Product = {
  id: number;
  title: string;
  price: Nullable<number>;
  description: Nullable<string>;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
