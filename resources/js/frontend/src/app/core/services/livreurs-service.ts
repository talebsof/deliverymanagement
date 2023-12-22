import { Injectable } from "@angular/core";
import {forkJoin, map, Observable} from "rxjs";
import {ApiResponse, Livreurs} from "../models/livreurs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class LivreursService {
  private serviceUrl = 'http://127.0.0.1:8000/api/livreurs';

  constructor(private http: HttpClient) {
  }

  getDeliveryPersons(): Observable<Livreurs[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Livreurs[]>(map((data: any) => data.data));
  }

  updateDeliveryPersons(user: Livreurs): Observable<Livreurs> {
    return this.http.patch<Livreurs>(`${this.serviceUrl}/${user.id}`, user);
  }

  addDeliveryPersons(user: Livreurs): Observable<ApiResponse<Livreurs>> {
    return this.http.post<Livreurs>(`${this.serviceUrl}`, user) as unknown as Observable<ApiResponse<Livreurs>>;
  }

  deleteDeliveryPerson(id: number): Observable<Livreurs> {
    return this.http.delete<Livreurs>(`${this.serviceUrl}/${id}`);
  }

  deleteDeliveryPersons(users: Livreurs[]): Observable<Livreurs[]> {
    return forkJoin(
      users.map((user) =>
        this.http.delete<Livreurs>(`${this.serviceUrl}/${user.id}`)
      )
    );
  }



  getLastId(){
    let tab =  this.getDeliveryPersons();
    return tab.pipe(map(deliveryPerson => Math.max(...deliveryPerson.map(dp => dp.id))))
  }




}
