import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  contrycode:string="521";
  telefono:string="4494324132";
  url:string="https://api.whatsapp.com/send?"+this.contrycode+this.telefono+"?text=hi";
  constructor() { }

  ngOnInit() {
  }

}
