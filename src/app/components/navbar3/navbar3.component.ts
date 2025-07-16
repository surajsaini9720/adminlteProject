import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar3',
  standalone: false,
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component {
  userName = '';
  userRole = '';

  constructor(private auth: AuthService, private router: Router) {
    const tokenData = this.decodeToken();
    if (tokenData) {
      this.userName = tokenData.name || '';
      this.userRole = tokenData.role || '';
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  decodeToken() {
    const token = this.auth.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (e) {
      console.error('Token decode failed:', e);
      return null;
    }
  }
}
