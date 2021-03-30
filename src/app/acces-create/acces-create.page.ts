import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {Datos } from '../models/datos.model';
@Component({
  selector: 'app-acces-create',
  templateUrl: './acces-create.page.html',
  styleUrls: ['./acces-create.page.scss'],
})
export class AccesCreatePage implements OnInit {
post = {} as Datos;
  constructor(private firestore: AngularFirestore,
    private router: Router) { }

  ngOnInit() {
  }

  async crear(post: Datos){
    // if(this.validation()){
    try {
      // falta el nombre de la tabla
      await this.firestore.collection(post.tipoFecha).add(post);      
    } catch (error) {
      console.log('Error: crear los datos');
    }   
    
  // }   
}

  validation(){
    if(!this.post.nombre){
      console.log("falta el nombre");
      return false;
    }
    if(!this.post.fecha){
      console.log("falta el fecha");
      return false;
    }
    if(!this.post.domicilio){
      console.log("falta el domicilio");
      return false;
    }
    if(!this.post.clave){
      console.log("falta el clave");
      return false;
    }
    if(!this.post.tipoFecha){
      console.log("falta el tipo de Fecha");
      return false;
    }
    if(!this.post.tipoVisita){
      console.log("falta el Tip de Visita");
      return false;
    }
    return true;
  }

}
