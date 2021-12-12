export enum category {
  phone = 'phone',
  notebook = 'notebook',
  tv = 'tv',
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: category;
  isAvailable: boolean;
}
