import { Injectable } from "@angular/core";
import {forkJoin, map, Observable} from "rxjs";
import {DeliveryPersons} from "../models/delivery-persons";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class LivraisonsService {
  private serviceUrl = 'http://127.0.0.1:8000/api/livraisons';

  constructor(private http: HttpClient) {
  }

  getDeliveryPersons(): Observable<DeliveryPersons[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<DeliveryPersons[]>(map((data: any) => data.data));
  }

  updateDeliveryPersons(user: DeliveryPersons): Observable<DeliveryPersons> {
    return this.http.patch<DeliveryPersons>(`${this.serviceUrl}/${user.id}`, user);
  }

  addDeliveryPersons(user: DeliveryPersons): Observable<DeliveryPersons> {
    return this.http.post<DeliveryPersons>(`${this.serviceUrl}`, user);
  }

  deleteDeliveryPerson(id: number): Observable<DeliveryPersons> {
    return this.http.delete<DeliveryPersons>(`${this.serviceUrl}/${id}`);
  }

  deleteDeliveryPersons(users: DeliveryPersons[]): Observable<DeliveryPersons[]> {
    return forkJoin(
      users.map((user) =>
        this.http.delete<DeliveryPersons>(`${this.serviceUrl}/${user.id}`)
      )
    );
  }



  getLastId(){
    let tab =  this.getDeliveryPersons();
    return tab.pipe(map(deliveryPerson => Math.max(...deliveryPerson.map(dp => dp.id))))
  }




}
