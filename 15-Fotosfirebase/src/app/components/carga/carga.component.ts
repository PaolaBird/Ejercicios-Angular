import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  archivos: FileItem[] = []
  estaSobreElemento: boolean = false


  constructor(public _cargaImagenes: CargaImagenesService) { }

  ngOnInit() {
  }

  cargarImagenes(){
    this._cargaImagenes.cargarImagenesFirebase(this.archivos)
  }

  limpiarArchivos(){
    this.archivos = []
  }

}
