import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

	heroes:Heroe[] =[]

  constructor(private _heroesService:HeroesService, private _router:Router) { } //Es lo primero que se ejecuta cuando se inicializa un objeto

  ngOnInit() {  //Se ejecuta cuando la pagina ya esta renderizada
  	this.heroes = this._heroesService.getHeroes()
  }

  verHeroe(indx:number){
  	this._router.navigate(['/heroe', indx])
  }

}
