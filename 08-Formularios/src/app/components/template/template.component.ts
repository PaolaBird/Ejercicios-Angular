import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched: not(form){
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent{

  usuario:object={
    nombre:"null",
    apellido:"null",
    correo:"null", 
    pais:"",
    sexo:"Mujer",
    acepta: false,
  }
  paises=[{
    codigo: "CO",
    nombre: "Colombia"
    },
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    }]

  sexos: String[] = ['Hombre', 'Mujer', 'Prefiero no decir']
  constructor() { }
  guardar(forma:NgForm){

    console.log(forma)
    console.log("forma", forma.value)
  }

}
