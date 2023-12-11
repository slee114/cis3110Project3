import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { WishList } from '../WishList';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-display.component.html',
  styleUrls: ['./details-display.component.css']
})
export class DetailsDisplayComponent implements OnInit{
  
  item: Item | undefined;
  constructor(private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromParams = Number(routeParams.get("itemId"));

    this.item = WishList.find(item => item.id === itemIdFromParams);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
    window.alert(`${item.title} was added to the cart!`)
  }
}
