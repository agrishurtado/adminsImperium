import { Component, Input, OnInit } from '@angular/core';
import { Datos} from '../models/datos.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-configurations-create',
  templateUrl: './configurations-create.page.html',
  styleUrls: ['./configurations-create.page.scss'],
})
export class ConfigurationsCreatePage implements OnInit {
post ={} as Datos;

  constructor(private firestore: AngularFirestore,
              private router: Router,
              private navCtrl: NavController,) { }

  ngOnInit() {
  }

  async crear(post: Datos){
    if(this.validation()){
    try {
      // falta el nombre de la tabla
      await this.firestore.collection(post.tipoRegistro).add(post);      
    } catch (error) {
      console.log('Error: crear los datros');
    }   
    // no encontre forma de resetear los input aun mandando a la misma pagina
    // por eso mando a la pagina anterior 
    this.router.navigate(['configurations'])
  }   
}

  validation(){
    if(!this.post.nombre){
      console.log("falta el nombre");
      return false;
    }
    if(!this.post.domicilio){
      console.log("falta el domicilio");
      return false;
    }
    if(!this.post.fraccionamiento){
      console.log("falta el fraccionamiento");
      return false;
    }
    if(!this.post.tipoRegistro){
      console.log("falta el tipo de registro");
      return false;
    }
    if(!this.post.Email){
      console.log("falta el Email");
      return false;
    }
    return true;
  }

}
