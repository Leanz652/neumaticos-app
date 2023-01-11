import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private route: Router) {}

  isHome(): boolean {
    return this.route.url === '/home';
  }

  scroll(id: string) {
    const labelMarca = document.getElementById('marcaLabel');
    labelMarca?.click();
    const element = document.getElementById(id);
    element?.scrollIntoView();
  }
}
