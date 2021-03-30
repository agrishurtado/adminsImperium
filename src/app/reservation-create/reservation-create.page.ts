import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {Datos } from '../models/datos.model';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.page.html',
  styleUrls: ['./reservation-create.page.scss'],
})
export class ReservationCreatePage implements OnInit {
  post = {} as Datos;
  constructor(private firestore: AngularFirestore,
    private router: Router) { }

  ngOnInit() {
  }

  async crear(post: Datos){
    // if(this.validation()){
    try {
      // falta el nombre de la tabla
      await this.firestore.collection("reservaciones").add(post);      
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
    if(!this.post.lugar){
      console.log("falta el lugar");
      return false;
    }
    if(!this.post.costo){
      console.log("falta el costo");
      return false;
    }
    if(!this.post.estatus){
      console.log("falta el estatus");
      return false;
    }
    if(!this.post.numPersonas){
      console.log("falta el numero de personas");
      return false;
    }
    return true;
  }

}
