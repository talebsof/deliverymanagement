import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DeliveryPersons, UserColumns} from "../../../core/models/delivery-persons";
import {DeliveryPersonsService} from "../../../core/services/delivery-persons-service";

@Component({
  selector: 'app-tournes',
  templateUrl: './tournes.component.html',
  styleUrl: './tournes.component.scss'
})
export class TournesComponent implements OnInit{
  dataSource = new MatTableDataSource<DeliveryPersons>();
  columnsSchema: any = UserColumns;
  valid: { [id: number]: { [key: string]: boolean } } = {};
  varPourAjouter = 'ajouter une tournée';
  varPourSupprimer = 'supprimer de(s) tournée(s)';
  constructor(private userService: DeliveryPersonsService) {}

  ngOnInit() {
    this.userService.getDeliveryPersons().subscribe((res: any) => {
      this.dataSource.data = res;
    });
    console.log(this.dataSource.data);

  }

  removeSelectedRows() {
    const users = this.dataSource.data.filter((u: DeliveryPersons) => u.isSelected);
    this.userService.deleteDeliveryPersons(users)
      .subscribe(()=> this.dataSource.data = this.dataSource.data.filter(
        (u: DeliveryPersons) => !u.isSelected,
      ));
  }
  addRow() {
    const newRow: DeliveryPersons = {
      id: 0,
      name: '',
      surname: '',
      phone_number: '',
      status: '',
      isEdit: true,
      isSelected: false,
    }
    this.dataSource.data = [newRow, ...this.dataSource.data]
  }

  editRow(deleveryPerson: DeliveryPersons) {
    if (deleveryPerson.id === 0) {
      this.userService.addDeliveryPersons(deleveryPerson).subscribe((newDeliveryPersons: DeliveryPersons) => {
        deleveryPerson.id = newDeliveryPersons.id;
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
        (u: DeliveryPersons) => u.id !== id,
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
