import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem, Food } from 'src/assets/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart); // BehaviorSubject - subscribe behavior
  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);

    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.storeCart();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.storeCart();
  }

  changeQuantity(foodID: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodID);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.storeCart();
  }

  clearCart(): void {
    this.cart = new Cart();
    this.storeCart();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private storeCart(): void {
    this.cart.totalPrice = this.cart.items.reduce((prev, curr) => prev + curr.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prev, curr) => prev + curr.quantity, 0);
    const cartJSON = JSON.stringify(this.cart);

    localStorage.setItem('Cart', cartJSON);
    this.cartSubject.next(this.cart);
  }

  private getCart(): Cart {
    const cartJSON = localStorage.getItem('Cart');
    return cartJSON ? JSON.parse(cartJSON) : new Cart();
  }
}
