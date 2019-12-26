import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{

  forma:FormGroup;
  usuario:any = {
    nombrecompleto:{
      nombre: "Paola",
      apellido:"Pajaro"
    },
    correo:"paola.pajaro98@ufps.co",
    //pasatiempos: ["leer", "aprender", "Hacer yoga"]
  }

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto' : new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(5)
          ]),
        'apellido': new FormControl('', 
                                    [Validators.required,
                                    this.noPajaro] ),

      }),
      'correo': new FormControl('', [
                                    Validators.required, 
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1':new FormControl('', Validators.required),
      'password2':new FormControl('', Validators.required),
    })

    //this.forma.setValue(this.usuario) //Esto toma el objeto que del cual queremos extraer los datos por default

    this.forma.controls["password2"].setValidators([
      Validators.required, this.noIgual.bind(this.forma) //con bind le decimos para el contesto donde se ejecuta que es this
    ])

    // this.forma.valueChanges
    //       .subscribe(data=>{
    //         console.log(data)
    //       })

    // this.forma.controls['username'].valueChanges
    //           .subscribe(data=>{
    //             console.log(data)
    //           })

    this.forma.controls['username'].statusChanges
              .subscribe(data=>{
                console.log(data);
              })
  }

  guardarCambios(){
    console.log(this.forma.value)
    console.log(this.forma)
    // this.forma.reset({
    //   nombrecompleto:{
    //     nombre:"",
    //     apellido:""
    //   },
    //   correo:""
    // })
  }

  noPajaro(control: FormControl):{[s:string]:boolean}{
    if(control.value==="Pajaro"){
      return{
        nopajaro:true
      }
    }
    return null
  }

  noIgual(control: FormControl):{[s:string]:boolean}{
    let forma: any= this
    if(control.value !== this.controls['password1'].value){
      return{
        noiguales:true
      }
    }
    return null
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any>{
    
    let promesa = new Promise ( 
      ( resolve, reject ) => {

        setTimeout( () => {
       if ( control.value === "paola@bird" ) {
         resolve( {exite:true} )
       }else {
         resolve( null )
       }
     },3000) 
    }
    )
    return promesa
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

}
