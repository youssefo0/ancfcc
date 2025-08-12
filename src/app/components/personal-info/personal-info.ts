import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  imports: [RouterModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css'
})
export class PersonalInfo {
  constructor(private router: Router) { }

  logout(): void {
    // Implement your logout logic here, e.g., clear session, navigate to login
    alert('Logging out...');
    this.router.navigate(['/login']); // Example: navigate to login page after logout
  }
}
