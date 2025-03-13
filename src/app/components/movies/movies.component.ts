import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'] // 🔹 Corrección: "styleUrls" en plural
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe({
      next: (data: any) => {
        console.log('Películas obtenidas:', data); // 👀 Depuración
        this.movies = data.results || []; // 🔹 Evita errores si "results" es undefined
      },
      error: (err) => console.error('Error al obtener películas:', err)
    });
  }
}
