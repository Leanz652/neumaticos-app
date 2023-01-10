import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SiderComponent } from './sider/sider.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, SiderComponent, CardItemComponent],
  imports: [CommonModule, CartRoutingModule, NgxPaginationModule, FormsModule],
})
export class CartModule {}
