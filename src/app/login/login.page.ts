import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private authSvc: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  async onSubmit(email, password){
    try {
      const user= await this.authSvc.login(email.value, password.value);
      if(user){
       
        const isVerified = this.authSvc.isEmailVerified(user);
        console.log('verified: ',isVerified);
        this.redirecUser(isVerified);
      }
    } catch (error) {
      console.log('error:',error);
    }

  }

  async onSubmitGoogle(email, password){
    try {
      const user = await this.authSvc.loginGoogle();
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        console.log('Verified: ',isVerified);
        this.redirecUser(isVerified);
      }
    } catch (error) {
      console.log('error:',error);
    }
  }
  
  private redirecUser(isVerified: boolean): void{
    if(isVerified){
      this.router.navigate(['home']);
    }
   else{
     this.router.navigate(['verify-email']);
   }
    // else ve
  }

}
