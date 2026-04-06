export type Product = {
  id: string;
  name: string;
  code: string;
  price: number;
  category?: string;
  stock?: number;
  image?: string;
  description?: string;
};

export type OrderItem = {
  productId?: string;
  name: string;
  qty: number;
  price: number;
};

export type Order = {
  id: string;
  source: "storefront" | "pos" | "admin";
  items: OrderItem[];
  createdAt: string;
};

export type ProductPayload = {
  name: string;
  code: string;
  price: number;
  category: string;
  stock: number;
  image?: string;
};

export type ApiProductsResponse = {
  products: Product[];
};

export type ApiProductResponse = {
  product: Product;
};

export type ApiOrdersResponse = {
  orders: Order[];
};
