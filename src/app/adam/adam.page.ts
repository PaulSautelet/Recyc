import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adam',
  templateUrl: './adam.page.html',
  styleUrls: ['./adam.page.scss'],
})
export class AdamPage {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

    logout()
  {
    this.auth.signOut();
  }
  gotoProfile()
  {
    this.router.navigate(['/profile']);
  }
  nous(){
    this.router.navigate(['/a-propos-de-nous']);
  }
  edit(){
    this.router.navigate(['/profile/edit']);
  }
}
