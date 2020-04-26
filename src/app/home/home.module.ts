import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './components/carrusel/carrusel.component';

// IMPORTAR MODULOS NECESARIOS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CarruselComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CarruselComponent
  ]
})
export class HomeModule { }
