import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
	termino:string
	heroes:any []= []
  constructor( private _activatedRoute:ActivatedRoute, private _heroesServices:HeroesService) { }

  ngOnInit() {
  	this._activatedRoute.params.subscribe(params=> {
  		this.termino = params['termino']
  		this.heroes = this._heroesServices.buscarHeroes(params['termino'])
  	})
  }

}
