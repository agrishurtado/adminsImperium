import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';
import { Datos } from '../models/datos.model';
var base64data = null;
const {Camera} = Plugins;

@Component({
  selector: 'app-configurations-logos',
  templateUrl: './configurations-logos.page.html',
  styleUrls: ['./configurations-logos.page.scss'],
})
export class ConfigurationsLogosPage implements OnInit {
post =  {} as Datos;
  constructor(private firestore: AngularFirestore,
              private router: Router) { }

  ngOnInit() {
  }



  async crear(){
    
    try {
      this.post.imag = base64data == "" || base64data == null ? this.post.imag : base64data;      // falta el nombre de la tabla
      await this.firestore.collection("logo").add(this.post);      
    } catch (error) {
      console.log('Error: crear los datros');
    }   
    // no encontre forma de resetear los input aun mandando a la misma pagina
    // por eso mando a la pagina anterior 
    this.router.navigate(['configurations-logos'])
  
}


  loadImageFromDevice() {  
    const images: CameraOptions = {
      quality: 50,
      resultType: CameraResultType.Base64,
      allowEditing: true
    }
    Camera.getPhoto(images).then(imgdata => {
      base64data = 'data:image/jpeg;base64,' + imgdata.base64String;
    });
  }

}
