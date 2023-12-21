import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Livraisons, UserColumns} from "../../../core/models/livraisons";
import {LivraisonsService} from "../../../core/services/livraisons-service";

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
    this.userService.deleteDeliveryPersons(users)
      .subscribe(()=> this.dataSource.data = this.dataSource.data.filter(
        (u: Livraisons) => !u.isSelected,
      ));
  }
  addRow() {
    const newRow: Livraisons = {
      id: 0,
      pickup_address: '',
      dropoff_address: '',
      status: '',
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
      this.userService.addDeliveryPersons(deleveryPerson).subscribe((newLivraisons: Livraisons) => {
        deleveryPerson.id = newLivraisons.id;
        deleveryPerson.isEdit = false;
      });
    } else {
      this.userService.updateDeliveryPersons(deleveryPerson).subscribe(() => {
        deleveryPerson.isEdit = false;
      });
    }
  }

  removeRow(id: number) {
    this.userService.deleteDeliveryPerson(id).subscribe(() => {
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
