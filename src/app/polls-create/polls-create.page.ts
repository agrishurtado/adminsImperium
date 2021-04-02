import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Datos } from '../models/datos.model';

@Component({
  selector: 'app-polls-create',
  templateUrl: './polls-create.page.html',
  styleUrls: ['./polls-create.page.scss'],
})
export class PollsCreatePage implements OnInit {
  post = {} as Datos;

  constructor(private firestore: AngularFirestore,
              private router: Router) { }

  ngOnInit() {
  }

async crear (post: Datos){
  try {
 
    await this.firestore.collection("encuesta/").add(this.post);
    

  } catch (error) {
    console.log('Error: al crear encuesta');
  }
}

formValidation(){
  if(!this.post.nombre){
    console.log("Ingresa un Título para tu Encuesta");
    return false;
  }
  if(!this.post.fecha){
    console.log("Ingresa un fecha de inicio");
    return false;
  }
  if(!this.post.fechaf){
    console.log("Ingresa un fecha de fin");
    return false;
  }
  if(!this.post.mensaje){
    console.log("Ingresa un fecha de inicio");
    return false;
  }
  if(!this.post.pregunta1){
    console.log("Ingresa un fecha de inicio");
    return false;
  }
  if(!this.post.respuesta1){
    console.log("Ingresa un fecha de inicio");
    return false;
  }
  if(!this.post.respuesta2){
    console.log("Ingresa un fecha de inicio");
    return false;
  }
}
}
