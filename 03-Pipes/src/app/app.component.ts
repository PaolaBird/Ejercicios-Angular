import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre= 'Paola'
  arreglo = [1,2,3,4,5,6,7,8,9,10]
  PI= Math.PI
  a:number =0.234
  salario = 1234.5
  heroe={
  	nombre:'Tony Stark',
  	clave:'Iron Man',
  	edad: 40,
  	direccion: {
  		calle: 'Avanger',
  		casa:'USA'
  	}
  }

  valorPromesa = new Promise( (resolve, reject)=>{
  	setTimeout(()=>resolve ('Llegaron los datos'), 3500)
  })

  fecha= new Date()

  nombres ='YinDY Paola PAJAro URquiJo'
  video= "W4AiOKlOO0Q"

}
