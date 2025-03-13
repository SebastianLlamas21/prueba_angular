import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-detalles',
  imports: [NgIf,NgFor],
  templateUrl: './movie-detalles.component.html',
  styleUrl: './movie-detalles.component.css'
})
export class MovieDetallesComponent implements OnInit {
  movieId!: number;
  movieDetails: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Obtener el id de la película desde la URL
    this.movieId = +this.route.snapshot.paramMap.get('id')!;

    // Llamar al servicio para obtener los detalles de la película
    this.apiService.getMovieDetails(this.movieId).subscribe(
      (data) => {
        this.movieDetails = data;
      },
      (error) => {
        console.error('Error al obtener detalles de la película:', error);
      }
    );
  }
}
