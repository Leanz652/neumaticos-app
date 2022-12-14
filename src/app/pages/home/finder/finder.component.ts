import { Component } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css'],
})
export class FinderComponent {
  activateButton() {
    const botones = document.querySelectorAll('.boton-finder');

    console.log(botones);
  }
}
