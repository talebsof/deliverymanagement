import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Livraisons, UserColumns} from "../../../core/models/livraisons";
import {LivraisonsService} from "../../../core/services/livraisons-service";
import {ApiResponse} from "../../../core/models/tournes";

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrl: './livraisons.component.scss'
})
export class LivraisonsComponent implements OnInit{
  dataSource = new MatTableDataSource<Livraisons>();
  columnsSchema: any = UserColumns;
  valid: { [id: number]: { [key: string]: boolean } } = {};
  varPourAjouter = 'ajouter une livraison';
  varPourSupprimer = 'supprimer de(s) livraison(s)';
  constructor(private userService: LivraisonsService) {

  }

  ngOnInit() {
    this.userService.getLivraisons().subscribe((res: any) => {
      this.dataSource.data = res;
    });
    console.log(this.dataSource.data);


  }

  removeSelectedRows() {
    const users = this.dataSource.data.filter((u: Livraisons) => u.isSelected);
    this.userService.deleteLivraisons(users)
      .subscribe(()=> this.dataSource.data = this.dataSource.data.filter(
        (u: Livraisons) => !u.isSelected,
      ));
  }
  addRow() {
    const newRow: Livraisons = {
      id: 0,
      pickup_address: '',
      dropoff_address: '',
      status: 'pending',
      receiver_name: '',
      receiver_phone:'',
      delivery_latitude:0,
      delivery_longitude:0,
      isEdit: true,
      isSelected: false,
    }
    this.dataSource.data = [newRow, ...this.dataSource.data]
  }

  editRow(deleveryPerson: Livraisons) {
    if (deleveryPerson.id === 0) {
      this.userService.addLivraisons(deleveryPerson).subscribe((response: ApiResponse<Livraisons>) => {
        const newLivraison = response.data;
        deleveryPerson.id = newLivraison.id;
        deleveryPerson.isEdit = false;
      })
    } else {
      this.userService.updateLivraisons(deleveryPerson).subscribe(() => {
        deleveryPerson.isEdit = false;
      });
    }
  }

  removeRow(id: number) {
    this.userService.deleteLivraison(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: Livraisons) => u.id !== id,
      )
    })
  }

  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }
}
