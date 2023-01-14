import { Component, OnInit } from '@angular/core';
import { NeumaticosService } from '../../../services/neumaticos.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  neumaticos = '';

  constructor(private neumaticosService: NeumaticosService) {}
  ngOnInit(): void {
    this.neumaticosService.dataSeleccionada.subscribe((valor: any) => {
      this.neumaticos = valor[0].Referencia;
    });
  }
}
