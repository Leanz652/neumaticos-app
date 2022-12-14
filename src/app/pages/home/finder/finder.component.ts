import { Component } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css'],
})
export class FinderComponent {
  esVehiculo = true;

  activateButton(event: string) {
    const botones = document.querySelectorAll('.boton-finder');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    botones.forEach((boton: any) => {
      boton.dataset.tipo.includes(event)
        ? this.botonASeleccionar(boton)
        : this.botonADeshabilitar(boton);
    });

    if (event == 'vehiculo') {
      this.esVehiculo = true;
    } else {
      this.esVehiculo = false;
    }
  }

  botonASeleccionar(boton: Element) {
    console.log('pase por aqui');
    boton.classList.add('fondo-amarillo');
    boton.classList.remove('fondo-disable');
  }

  botonADeshabilitar(boton: Element) {
    console.log('no pase por aqui');
    boton.classList.remove('fondo-amarillo');
    boton.classList.add('fondo-disable');
  }
}
