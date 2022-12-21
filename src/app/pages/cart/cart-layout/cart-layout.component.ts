import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-layout',
  templateUrl: './cart-layout.component.html',
  styleUrls: ['./cart-layout.component.css'],
})
export class CartLayoutComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
