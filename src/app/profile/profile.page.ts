import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  user:any;
  constructor
  (
private auth: AuthService
  ){}
  
  ngOnInit() {
  this.auth.user$.subscribe(user => {
  this.user = user;
})
   }
 }
