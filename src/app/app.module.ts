import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductService } from './services/product.service';

@NgModule({
  //The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    AppComponent,
    ProductCategoryMenuComponent,
    ProductListComponent
  ],
  //The set of NgModules whose exported declarables are available to templates in this module.
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  //The set of injectable objects that are available in the injector of this module.
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
