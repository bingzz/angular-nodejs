/**
 * Interface are automatically required
 * interface cannot create a new Instance
 * that's why creating a class can create a new instance
 */

export class Food {
  id!: string; // ! means required
  name!: string;
  price!: number;
  tags?: string[]; // ? means optional
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}

export class CartItem {
  constructor(public food: Food) { }

  quantity: number = 1;
  price: number = this.food.price;
}

export class Cart {
  items: CartItem[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;
}

export class User {
  id!: string;
  email!: string;
  name!: string;
  address!: string;
  token!: string;
  isAdmin!: boolean;
}

export interface Tag {
  name: string;
  count: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}
