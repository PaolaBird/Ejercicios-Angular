import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  constructor( private auth:AuthService) { 
    console.log(auth.userProfile$)
  }

  ngOnInit() {
  }

}
