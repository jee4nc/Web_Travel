import { Component, OnInit } from '@angular/core';
// IMPORTACION DE MODULO PARA LOS FORMS
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileForm = new FormGroup({
    radioButton : new FormControl(''),
    origen: new FormControl(''),
    destino: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.reset(); // clean inputs
  }


}
