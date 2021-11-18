import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit 
{
userId: string;
name:string;
email:string;
phone:string;
adress:string;
region:string;
ville:string;

  constructor(
    private auth : AuthService,
    private afs: AngularFirestore,
    private loadingCTRL: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() 
  {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.adress = user.adress;
      this.ville = user.ville;
      this.region = user.region;
    })
  }
async updateProfile()
{
const loading = await this.loadingCTRL.create({
  message: 'Modification en cours...',
  spinner: 'crescent',
  showBackdrop: true
});

loading.present();

this.afs.collection('users').doc(this.userId).set({
'name': this.name,
'email': this.email,
'phone': this.phone,
'adress': this.adress,
'ville': this.ville,
'editAt': Date.now()
},{merge: true}) 
.then(()=> {
  loading.dismiss();
  this.toast('Mise à jour effectuée', 'success');
  this.router.navigate(['/profile']);
})
.catch(error => {
  loading.dismiss();
  this.toast(error.message,'danger');
})
}
async toast(message,status)
{
  const toast = await this.toastr.create({
    message: message,
    color: status,
    position:'top',
    duration: 2000
  });
toast.present();
}
}
