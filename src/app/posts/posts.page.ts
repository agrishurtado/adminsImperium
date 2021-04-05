import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  contrycode:string="52";
  telefono:string="4494324132";
  url:string="https://api.whatsapp.com"+this.contrycode+this.telefono+"?text=hi";
  // url:string="https://wa.me"+this.contrycode+this.telefono+"?text=hi";

  constructor() { }

  ngOnInit() {
  }

}
