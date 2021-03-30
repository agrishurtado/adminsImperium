import { Component} from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage {
  user$: Observable <User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) { }

  
  async onSubmit(): Promise<void>{
    try {
      await this.authSvc.sendVerificationEmail();
    } catch (error) {
      console.log('Error: ',error);
    }
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
