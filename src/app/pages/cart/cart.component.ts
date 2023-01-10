import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @HostBinding('class.flex-grow-1') someField = true;
  @HostBinding('class.d-flex') someField2 = true;
  @HostBinding('class.flex-column') someField3 = true;

  colecion = [1, 2, 3, 4];
  p = 1;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
