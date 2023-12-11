import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { WishList } from '../WishList';
import { ButtonComponent } from '../button/button.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-concerts-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './items-list.component.html',
  styleUrls: ['./concerts-list.component.css']
})
export class ItemsListComponent {
 WishList: Item[] = WishList;

 
 constructor(private cartService: CartService) {}

 onKey(event: any): void {
    if (!event.target.value) {this.WishList = WishList};

    this.WishList = this.WishList.filter((item) => item.title.toLowerCase().includes(event.target.value.toLowerCase()));
 }

 buyItem(item: Item) {
  this.cartService.addToCart(item)
  window.alert(`${item.title} was added to the cart!`)
 }
}
