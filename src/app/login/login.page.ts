import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FireserviceService } from '../fireservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:string;
  public password:string;

  constructor(
    public router:Router,
    public fireService:FireserviceService,
    private auth: AuthService,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }


  login()
{
  if(this.email && this.password)
  {
this.auth.signIn(this.email, this.password);
  }else{
    this.toast('Veuillez entrer votre email et votre mot de passe !', 'warning');
  }

}
async toast (message, status)
{
  const toast = await this.toastr.create({
    message: message,
    color: status,
    position: 'top',
    duration : 2000
  });
  toast.present();
}
signup(){
  this.router.navigateByUrl('signup');
}
}
