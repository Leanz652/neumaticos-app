import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousellComponent } from './carousell/carousell.component';
import { FinderComponent } from './finder/finder.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [CarousellComponent, FinderComponent, HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {}
