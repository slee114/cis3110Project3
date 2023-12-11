import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-url-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit{
  itemsInCart: Item[] = []

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItems();
  }
}
