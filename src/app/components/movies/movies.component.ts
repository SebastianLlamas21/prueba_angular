import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@Component({
  selector: 'app-movies',
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: any[] = [];
  paginas: number = 1;
  pelicula!: any;
  maxPag: number = 5;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.apiService.getPopularMovies(this.paginas).subscribe({
      next: (data: any) => {
        console.log('Películas obtenidas:', data);
        this.movies.push(...data.results);
        console.log(this.movies)

      },
      error: (err) => console.error('Error al obtener películas:', err)
    });
  }



  abrirDetalles(movieId: number) {
    Swal.fire({
      title: '¿Cómo desea ver los detalles?',
      text: 'Selecciona una opción: ',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Modal',
      cancelButtonText: 'Página',
      reverseButtons: true,
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.showMovieModal(movieId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['/movie/', movieId]); 
      }
    });
  }

  // Función para mostrar detalles de la película en un modal
  showMovieModal(movieId: number) {
    this.apiService.getMovieDetails(movieId).subscribe(
      (data) => {
        Swal.fire({
          title: data.title,
          html: `
            <p><strong>Resumen:</strong> ${data.overview}</p>
            <p><strong>Fecha de lanzamiento:</strong> ${data.release_date}</p>
            <p><strong>Calificación:</strong> ${data.vote_average}/10</p>
            <p><strong>Idioma original:</strong> ${data.original_language}</p>
            <div class="mt-3">
              <h3>Géneros:</h3>
              <ul class="list-inline">
                ${data.genres.map((genre: any) => `<li class="list-inline-item badge bg-primary">${genre.name}</li>`).join('')}
              </ul>
            </div>
          `,
          showCloseButton: true,
          confirmButtonText: 'Cerrar',
          width: '600px'
        });
        console.log(data.overview)
      },
      (error) => {
        console.error('Error al obtener detalles de la película:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar los detalles de la película.',
        });
      }
    );
  }

  cargarMas() {
    //if (this.paginas != this.maxPag) {
      this.paginas += 1;
      this.obtenerPeliculas()
    //}
  }

  onScroll() {
    this.cargarMas()
  }
}