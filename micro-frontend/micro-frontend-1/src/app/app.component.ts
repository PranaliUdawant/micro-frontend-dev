import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'micro-frontend-1';
  constructor(private router: Router) {}
  onCountryListClick() {
    this.router.navigate(['countryList']);
  }
  onHomeClick() {
    this.router.navigate(['/'])
  }
  OnMapView () {
    this.router.navigate(['mapview'])
  }
}
