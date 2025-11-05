import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  userEmail = localStorage.getItem('userEmail');  
  constructor(public router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToList() {
  this.router.navigate(['/items']);
}
}
