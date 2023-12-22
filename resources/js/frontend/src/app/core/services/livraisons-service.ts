import { Injectable } from "@angular/core";
import {forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Livraisons} from "../models/livraisons";
import {ApiResponse} from "../models/tournes";

@Injectable({
  providedIn: 'root',
})
export class LivraisonsService {
  private serviceUrl = 'http://127.0.0.1:8000/api/livraisons';

  constructor(private http: HttpClient) {
  }

  getLivraisons(): Observable<Livraisons[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Livraisons[]>(map((data: any) => data.data));
  }

  updateLivraisons(livraison: Livraisons): Observable<Livraisons> {
    return this.http.patch<Livraisons>(`${this.serviceUrl}/${livraison.id}`, livraison);
  }

  addLivraisons(livraison: Livraisons): Observable<ApiResponse<Livraisons>> {
    return this.http.post<Livraisons>(`${this.serviceUrl}`, livraison) as unknown as Observable<ApiResponse<Livraisons>>;
  }

  deleteLivraison(id: number): Observable<Livraisons> {
    return this.http.delete<Livraisons>(`${this.serviceUrl}/${id}`);
  }

  deleteLivraisons(users: Livraisons[]): Observable<Livraisons[]> {
    return forkJoin(
      users.map((livraison) =>
        this.http.delete<Livraisons>(`${this.serviceUrl}/${livraison.id}`)
      )
    );
  }



  getLastId(){
    let tab =  this.getLivraisons();
    return tab.pipe(map(Livraison => Math.max(...Livraison.map(dp => dp.id))))
  }




}
