import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApiResponse, Livreurs, UserColumns} from "../../../core/models/livreurs";
import {MatDialog} from "@angular/material/dialog";
import {LivreursService} from "../../../core/services/livreurs-service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-delivery-persons',
  templateUrl: './livreurs.component.html',
  styleUrl: './livreurs.component.scss'
})
export class LivreursComponent implements OnInit{
  dataSource = new MatTableDataSource<Livreurs>();
  columnsSchema: any = UserColumns;
  valid: { [id: number]: { [key: string]: boolean } } = {};
  varPourAjouter = 'ajouter un livreur';
  varPourSupprimer = 'supprimer de(s) livreur(s)';

  constructor(private userService: LivreursService) {}

  ngOnInit() {
    this.userService.getDeliveryPersons().subscribe((res: any) => {
      this.dataSource.data = res;
    });
    console.log(this.dataSource.data);

  }

  removeSelectedRows() {
    const users = this.dataSource.data.filter((u: Livreurs) => u.isSelected);
    this.userService.deleteDeliveryPersons(users)
      .subscribe(()=> this.dataSource.data = this.dataSource.data.filter(
        (u: Livreurs) => !u.isSelected,
      ));
  }
  addRow() {
    const newRow: Livreurs = {
      id: 0,
      name: '',
      surname: '',
      phone_number: '',
      status: 'available',
      isEdit: true,
      isSelected: false,
        //data:null
    }
    this.dataSource.data = [newRow, ...this.dataSource.data]
  }

  editRow(deleveryPerson: Livreurs) {
    if (deleveryPerson.id === 0) {
        this.userService.addDeliveryPersons(deleveryPerson).subscribe((response: ApiResponse<Livreurs>) => {
            const newDeliveryPerson = response.data;
            deleveryPerson.id = newDeliveryPerson.id;
            deleveryPerson.isEdit = false;
      })
    }else {
      this.userService.updateDeliveryPersons(deleveryPerson).subscribe(() => {
        deleveryPerson.isEdit = false;
      });
    }
  }

  removeRow(id: number) {
    this.userService.deleteDeliveryPerson(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: Livreurs) => u.id !== id,
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
