import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email:string;
  public password:string;
  public name:string;
  public phone:string;

  constructor(
    public fireService:FireserviceService,
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController

  ) { }

  ngOnInit() {
  }

  async signup(){ 
    
    const loading = await this.loadingCtrl.create({
      message: 'Greenium - Traitement de vos informations ...',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();
    this.afauth.createUserWithEmailAndPassword(this.email, this.password)

    this.fireService.signup({name:this.name,email:this.email,phone:this.phone,password:this.password})
    .then(res=>{
      if(res.user.uid){
        
        let data = {
          email:this.email,
          password:this.password,
          name:this.name,
          phone:this.phone,
          uid:res.user.uid
          
        }
        res.user.sendEmailVerification();
        this.fireService.saveDetails(data).then(res=>{
          loading.dismiss();
          this.toast('Inscription en succès ! Veuillez vérifier votre e-mail', 'success')
          this.router.navigate(['login']);
        })
      }
    },err=>{
      alert(err.message);
      loading.dismiss();
      this.toast(err.message, 'danger');
    })
  }
  async toast (message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration : 2000
    });
    toast.present();
  }

}
