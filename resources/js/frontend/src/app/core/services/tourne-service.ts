import { Injectable } from "@angular/core";
import {forkJoin, map, Observable} from "rxjs";
import {DeliveryPersons} from "../models/delivery-persons";
import {HttpClient} from "@angular/common/http";
import {Tournes} from "../models/tournes";

@Injectable({
  providedIn: 'root',
})
export class TourneService{
  private serviceUrl = 'http://127.0.0.1:8000/api/tournees';

  constructor(private http: HttpClient) {
  }

  getDeliveryPersons(): Observable<Tournes[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Tournes[]>(map((data: any) => data.data));
  }

  updateDeliveryPersons(tourne: Tournes): Observable<Tournes> {
    return this.http.patch<Tournes>(`${this.serviceUrl}/${tourne.id}`, tourne);
  }

  addDeliveryPersons(tourne: Tournes): Observable<Tournes> {
    return this.http.post<Tournes>(`${this.serviceUrl}`, tourne);
  }

  deleteDeliveryPerson(id: number): Observable<Tournes> {
    return this.http.delete<Tournes>(`${this.serviceUrl}/${id}`);
  }

  deleteDeliveryPersons(users: Tournes[]): Observable<Tournes[]> {
    return forkJoin(
      users.map((tourne) =>
        this.http.delete<Tournes>(`${this.serviceUrl}/${tourne.id}`)
      )
    );
  }

  getLastId(){
    let tab =  this.getDeliveryPersons();
    return tab.pipe(map(deliveryPerson => Math.max(...deliveryPerson.map(dp => dp.id))))
  }




}
