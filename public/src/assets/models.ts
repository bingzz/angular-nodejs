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

export interface Tag {
  name: string;
  count: number;
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
