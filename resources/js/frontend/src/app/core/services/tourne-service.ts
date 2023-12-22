import { Injectable } from "@angular/core";
import {forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResponse, Tournes} from "../models/tournes";

@Injectable({
  providedIn: 'root',
})
export class TourneService{
  private serviceUrl = 'http://127.0.0.1:8000/api/tournees';

  constructor(private http: HttpClient) {
  }

  getTrounes(): Observable<Tournes[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Tournes[]>(map((data: any) => data.data));
  }

  updateTrounes(tourne: Tournes): Observable<Tournes> {
    return this.http.patch<Tournes>(`${this.serviceUrl}/${tourne.id}`, tourne);
  }

  addTrounes(tourne: Tournes): Observable<ApiResponse<Tournes>> {
    return this.http.post<Tournes>(`${this.serviceUrl}`, tourne) as unknown as Observable<ApiResponse<Tournes>> ;
  }

  deleteTroune(id: number): Observable<Tournes> {
    return this.http.delete<Tournes>(`${this.serviceUrl}/${id}`);
  }

  deleteTrounes(users: Tournes[]): Observable<Tournes[]> {
    return forkJoin(
      users.map((tourne) =>
        this.http.delete<Tournes>(`${this.serviceUrl}/${tourne.id}`)
      )
    );
  }

  getLastId(){
    let tab =  this.getTrounes();
    return tab.pipe(map(Troune => Math.max(...Troune.map(dp => dp.id))))
  }




}
