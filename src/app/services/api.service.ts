import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2NkMjg4YTg1ZGRlYzZmMmYxYzQ3YTNjNzc3Yzc2ZiIsIm5iZiI6MTU4ODI3MTY2Ni44MDgsInN1YiI6IjVlYWIxYTMyMDcyOTFjMDAxZWVkNjQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K5Q2Zp3Am9ZynB4U3UjlIsBCki5HkxG_zYXhFOau8bc'; // Reemplázalo con tu clave de API

  constructor(private http: HttpClient) { }

  // Configurar headers con Bearer Token
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    });
  }

  // ✅ Obtener lista de películas populares
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular`, {
      headers: this.getHeaders(),
    });
  }

  // ✅ Obtener detalles de una película
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}`, {
      headers: this.getHeaders(),
    });
  }
}
