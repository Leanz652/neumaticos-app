import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NeumaticosService } from '../../../services/neumaticos.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css'],
})
export class FinderComponent implements OnInit {
  constructor(
    private neumaticosService: NeumaticosService,
    private fb: FormBuilder
  ) {}

  esVehiculo = true;
  dataMarcas: string[] = [];
  dataAnio: any[] = [];
  dataLinea: any[] = [];
  neumaticosForm = this.fb.group({
    marcaSelec: [null],
    modelo: [null, Validators.required],
    linea: [null, Validators.required],
  });

  ngOnInit(): void {
    this.dataMarcas = this.neumaticosService.getMarcas();

    this.neumaticosForm.get('modelo')?.disable();
    this.neumaticosForm.get('linea')?.disable();

    this.neumaticosForm.get('marcaSelec')?.valueChanges.subscribe((valor) => {
      if (valor) {
        this.dataAnio = this.neumaticosService
          .getDataNeumaticos(valor)
          .map((valor) => valor.Año);
        this.neumaticosForm.get('modelo')?.enable();
      }
    });

    this.neumaticosForm.get('modelo')?.valueChanges.subscribe(() => {
      if (this.marcaSelec?.value && this.modelo?.value) {
        this.dataLinea = this.neumaticosService.getDataNeumaticosPorMarcaYAnio(
          this.marcaSelec.value,
          this.modelo.value
        );
        this.neumaticosForm.get('linea')?.enable();
      }
    });
  }

  get marcaSelec() {
    return this.neumaticosForm.get('marcaSelec');
  }

  get modelo() {
    return this.neumaticosForm.get('modelo');
  }

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
    boton.classList.add('fondo-amarillo');
    boton.classList.remove('fondo-disable');
  }

  botonADeshabilitar(boton: Element) {
    boton.classList.remove('fondo-amarillo');
    boton.classList.add('fondo-disable');
  }
}
