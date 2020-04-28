import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './components/carrusel/carrusel.component';

// IMPORTAR MODULOS NECESARIOS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [CarruselComponent, FormComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    CarruselComponent,
    FormComponent
  ]
})
export class HomeModule { }
