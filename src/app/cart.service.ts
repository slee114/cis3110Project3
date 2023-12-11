import { Injectable } from '@angular/core';
import { Item } from './item';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = []

  constructor(private http: HttpClient) { }

  addToCart(item: Item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = []
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: String, price: number}[]>('../assets/shipping.json');
  }
}
