import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WishlistTitleComponent } from './WishList-title/wishlist-title.component';
import { BrowserModule } from '@angular/platform-browser';
import { ItemsListComponent } from './items-list/items-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UrlListComponent } from './url-list/url-list.component';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WishlistTitleComponent, ItemsListComponent, UrlListComponent, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
