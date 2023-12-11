import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component'
import { DetailsDisplayComponent } from './details-display/details-display.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UrlListComponent } from './url-list/url-list.component';


const routes: Routes = [{path: '', component: ItemsListComponent},
{path: 'details/:itemId', component: DetailsDisplayComponent},
{path: 'cart', component: ShoppingCartComponent},
{path: 'addNewItem', component: AddItemComponent},
{path: 'cartListView', component: UrlListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
