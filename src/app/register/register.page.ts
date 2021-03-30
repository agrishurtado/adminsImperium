import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private authSvc: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  async onSubmit( email, password){
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirecUser(isVerified);
      }
    } catch (error) {
      console.log('error: ', error);
    }

  }

  private redirecUser(isVerified: boolean): void{
    if(isVerified){
      this
      this.router.navigate(['home']);
    }
   else{
     this.router.navigate(['verify-email']);
   }
    // else ve
  }


}
