import { Component } from '@angular/core';
import { AlbumExampleComponent } from '../../components/album-example/album-example.component';
import { CardComponent } from '../../components/card/card.component';
import { TemaComponent } from '../../components/tema/tema.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pagina1',
  imports: [AlbumExampleComponent, CardComponent, TemaComponent, NgFor],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {
  cards = Array(9).fill(0); 


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
