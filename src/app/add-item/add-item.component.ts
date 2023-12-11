import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../item';
import { WishList } from '../WishList';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{

  wishList: Item[] = WishList;
  wishListLength: number = 0

  ngOnInit(): void {
    this.wishListLength = this.wishList.length;
  }

  newItemForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    url: new FormControl('')
   })

  addItem() {
    if (this.newItemForm.value.title && this.newItemForm.value.description && this.newItemForm.value.price && this.newItemForm.value.url) {
    const item: Item = {
      id: this.wishListLength + 1,
      title: this.newItemForm.value.title,
      description: this.newItemForm.value.description,
      price: this.newItemForm.value.price,
      url: this.newItemForm.value.url,
    }
    WishList.push(item);
    window.alert(item.title + " was added to the wishlist!")
  }
  }

}
