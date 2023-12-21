import { Injectable } from "@angular/core";
import {forkJoin, map, Observable} from "rxjs";
import {DeliveryPersons} from "../models/delivery-persons";
import {HttpClient} from "@angular/common/http";
import {Livraisons} from "../models/livraisons";

@Injectable({
  providedIn: 'root',
})
export class LivraisonsService {
  private serviceUrl = 'http://127.0.0.1:8000/api/livraisons';

  constructor(private http: HttpClient) {
  }

  getDeliveryPersons(): Observable<Livraisons[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Livraisons[]>(map((data: any) => data.data));
  }

  updateDeliveryPersons(user: Livraisons): Observable<Livraisons> {
    return this.http.patch<Livraisons>(`${this.serviceUrl}/${user.id}`, user);
  }

  addDeliveryPersons(user: Livraisons): Observable<Livraisons> {
    return this.http.post<Livraisons>(`${this.serviceUrl}`, user);
  }

  deleteDeliveryPerson(id: number): Observable<Livraisons> {
    return this.http.delete<Livraisons>(`${this.serviceUrl}/${id}`);
  }

  deleteDeliveryPersons(users: Livraisons[]): Observable<Livraisons[]> {
    return forkJoin(
      users.map((user) =>
        this.http.delete<Livraisons>(`${this.serviceUrl}/${user.id}`)
      )
    );
  }



  getLastId(){
    let tab =  this.getDeliveryPersons();
    return tab.pipe(map(deliveryPerson => Math.max(...deliveryPerson.map(dp => dp.id))))
  }




}
