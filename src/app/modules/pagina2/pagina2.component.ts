import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  imports: [CommonModule],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {
free: number = 0
pro: number = 15
enterprise: number = 29
hoy: number = Date.now()


  ngAfterViewInit(): void {
    // Selecciona todos los botones que tengan el atributo data-bs-theme-value
    const themeButtons = document.querySelectorAll('[data-bs-theme-value]');
    themeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const theme = button.getAttribute('data-bs-theme-value');
        if (theme !== null) {
          // Guarda la preferencia en localStorage
          localStorage.setItem('theme', theme);
          // Aplica el tema al elemento <html>
          document.documentElement.setAttribute('data-bs-theme', theme);
        }
      });
    });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-bs-theme', savedTheme);
    }
  }
}
