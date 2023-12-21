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

  getLivraisons(): Observable<Livraisons[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Livraisons[]>(map((data: any) => data.data));
  }

  updateDeliveryPersons(livraison: Livraisons): Observable<Livraisons> {
    return this.http.patch<Livraisons>(`${this.serviceUrl}/${livraison.id}`, livraison);
  }

  addDeliveryPersons(livraison: Livraisons): Observable<Livraisons> {
    return this.http.post<Livraisons>(`${this.serviceUrl}`, livraison);
  }

  deleteDeliveryPerson(id: number): Observable<Livraisons> {
    return this.http.delete<Livraisons>(`${this.serviceUrl}/${id}`);
  }

  deleteDeliveryPersons(users: Livraisons[]): Observable<Livraisons[]> {
    return forkJoin(
      users.map((livraison) =>
        this.http.delete<Livraisons>(`${this.serviceUrl}/${livraison.id}`)
      )
    );
  }



  getLastId(){
    let tab =  this.getLivraisons();
    return tab.pipe(map(deliveryPerson => Math.max(...deliveryPerson.map(dp => dp.id))))
  }




}
