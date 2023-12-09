import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  constructor(private http: HttpClient) { }

  getLivreurs() {
    return this.http.get('http://localhost/api/livreurs');
  }
}
