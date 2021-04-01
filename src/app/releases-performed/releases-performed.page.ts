import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {enableProdMode} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-releases-performed',
  templateUrl: './releases-performed.page.html',
  styleUrls: ['./releases-performed.page.scss'],
})
export class ReleasesPerformedPage implements OnInit {
  refe:any;
  datos:any;
  id:any;
  constructor(private firestore: AngularFirestore,
    private router:Router, 
    private sanitizer: DomSanitizer,) {
;
  }

  ngOnInit() {
    this.get();
  }

  async get(){
    try {
      this.refe = this.firestore.collection("items");
      this.refe.snapshotChanges().subscribe(data=>{
        this.datos = data.map(e=>{
          return{
            id: e.payload.doc.id,
            aviso: e.payload.doc.data()["aviso"],
            imag: e.payload.doc.data()["imag"],
          }
        })
      })
    } catch (error) {
      console.log("Error al cargar");
    }
  }

  async deletePost(id: string) { 
    await this.firestore.doc("items/" + id).delete();    
  }

  getImgContent(imgFile:string): SafeUrl {
    enableProdMode();
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }
}
