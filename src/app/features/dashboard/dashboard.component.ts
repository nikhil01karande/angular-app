import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  constructor(public router: Router,public auth:AuthService) {}
  userEmail = this.auth.getUserEmail()

  logout() {
    this.auth.logout()
    this.router.navigate(['/login']);
    
  }

  goToList() {
  this.router.navigate(['/items']);
}
}
