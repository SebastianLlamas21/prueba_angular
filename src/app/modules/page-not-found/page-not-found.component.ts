import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
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
