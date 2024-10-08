import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService,) { }
  isAuthenticated: boolean = false;

  isAdmin: boolean = false;
  isNutritionist: boolean = false;
  isPatient: boolean = false;
  profile()
  {
    this.router.navigate(['/profile']);

  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.authService.logout()
  }
fullname:any
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
      this.isAdmin = this.authService.isAdmin();
      this.isNutritionist = this.authService.isNutritionist();
      this.isPatient = this.authService.isPatient();
      this.fullname = localStorage.getItem('fullname');
    });

  }
}
