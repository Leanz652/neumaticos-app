import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  scroll(id: string) {
    const labelMarca = document.getElementById('marcaLabel');
    labelMarca?.click();
    const element = document.getElementById(id);
    element?.scrollIntoView();
  }
}
