import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService} from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

	heroe:any ={}

  constructor(private _activatedRoute: ActivatedRoute, private _heroesServices:HeroesService ) { 
  	this._activatedRoute.params.subscribe(params =>{
  		/*console.log(params['id']) el 'id' es el que pusimos en el archivo de las rutas*/
  		this.heroe = this._heroesServices.getHeroe(params['id'])
  	})
  }

 
}
