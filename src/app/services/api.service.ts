import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.api;
  private accessToken = environment.token;

  constructor(private http: HttpClient) { }

  // Configurar headers con Bearer Token
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    });
  }

  getPopularMovies(paginas:number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?language=es-MX&page=` +paginas,{
      headers: this.getHeaders(),
    });
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}`, {
      headers: this.getHeaders(),
    });
  }
}
