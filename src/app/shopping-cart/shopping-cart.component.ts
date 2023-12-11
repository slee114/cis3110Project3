import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { CartService } from '../cart.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-shopping-cart',
    standalone: true,
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css'],
    imports: [CommonModule, RouterModule]
})
export class ShoppingCartComponent implements OnInit{
  itemsInCart: Item[] = [];

  totalCost: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItems()

    for(let concerts of this.itemsInCart) {
      this.totalCost = this.totalCost + Number(concerts.price);
    }
  }

}
