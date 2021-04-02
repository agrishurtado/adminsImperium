import { Component, OnInit } from '@angular/core';
import { Datos } from '../models/datos.model';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';
import { AngularFirestore } from '@angular/fire/firestore';

var base64data = null;
const {Camera} = Plugins;

@Component({
  selector: 'app-releases-create',
  templateUrl: './releases-create.page.html',
  styleUrls: ['./releases-create.page.scss'],
})
export class ReleasesCreatePage implements OnInit {
  post= {} as Datos;
  id:any;
    constructor(private firestore: AngularFirestore ) { }
  
    ngOnInit() {
    }
  
    async crear(post:Datos){
    
      try {
       
        this.post.imag = base64data == "" || base64data == null ? this.post.imag : base64data;
        await this.firestore.collection("items/").add(this.post);
      } catch (e) {
      }
      //cerrar loading
    
    }
  
    loadImageFromDevice() {  
      const images: CameraOptions = {
        quality: 5,
        resultType: CameraResultType.Base64,
        allowEditing: true
      }
      Camera.getPhoto(images).then(imgdata => {
        base64data = 'data:image/jpeg;base64,' + imgdata.base64String;
      });
    }
}
