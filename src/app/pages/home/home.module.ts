import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousellComponent } from './carousell/carousell.component';
import { FinderComponent } from './finder/finder.component';
import { HomeComponent } from './home.component';
import { CarousellBrandsComponent } from './carousell-brands/carousell-brands.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarousellComponent,
    FinderComponent,
    HomeComponent,
    CarousellBrandsComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class HomeModule {}
