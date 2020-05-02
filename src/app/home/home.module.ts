import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './components/carrusel/carrusel.component';

// IMPORTAR MODULOS NECESARIOS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';




@NgModule({
  declarations: [CarruselComponent, FormComponent, DatepickerComponent, CardsComponent, CardComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    CarruselComponent,
    FormComponent,
    CardsComponent,
    CardComponent
  ]
})
export class HomeModule { }
