import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SiderComponent } from './sider/sider.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CartLayoutComponent } from './cart-layout/cart-layout.component';


@NgModule({
  declarations: [
    CartComponent,
    SiderComponent,
    CardItemComponent,
    CartLayoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
