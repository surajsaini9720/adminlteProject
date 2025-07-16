import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  userName = '';
  userRole = '';

  constructor(private auth: AuthService) {
    const tokenData = this.decodeToken();
    if (tokenData) {
      this.userName = tokenData.name || '';
      this.userRole = tokenData.role || '';
    }
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
