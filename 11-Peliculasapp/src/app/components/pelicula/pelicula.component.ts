import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any
  regresarA:string
  busquedad:string=""

  constructor(public router: ActivatedRoute, public _ps: PeliculasService) {
      this.router.params.subscribe(parametros=>{
        this.regresarA = parametros['pag']

        if(parametros['busqueda']){
          this.busquedad=parametros['busqueda']
        }

        this._ps.getPelicula(parametros['id'])
              .subscribe(pelicula => this.pelicula = pelicula)
     })
   }

  ngOnInit() {
  }

}
