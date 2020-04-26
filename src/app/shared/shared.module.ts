import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// IMPORTS NECESARIOS EN ESTE MODULO
import {RouterModule} from '@angular/router'; // for routerlink


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
