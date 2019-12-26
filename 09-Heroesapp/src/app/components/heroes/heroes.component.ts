import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = []
  loading: boolean = true

  constructor(private _heroeService: HeroesService) { 
    this._heroeService.getHeroes()
          .subscribe(data =>{
            console.log(data)
            //this.loading = false
            setTimeout(()=> {
                          this.loading = false
                          this.heroes =  data
                          }, 3000)
          })
  }

  ngOnInit() {
  }

  borraHeroe(key$:string){
    this._heroeService.borraHeroe(key$)
          .subscribe(result=>{
            if(result){
              console.error(result)
            }else{
              delete this.heroes[key$]
            }
          })
  }

}
