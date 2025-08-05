import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-titre-foncier',
  imports: [CommonModule],
  templateUrl: './titre-foncier.html',
  styleUrl: './titre-foncier.css'
})
 
export class TitreFoncierComponent {
  titres = [1, 2, 3, 4]; // Juste pour répéter les cartes
}
