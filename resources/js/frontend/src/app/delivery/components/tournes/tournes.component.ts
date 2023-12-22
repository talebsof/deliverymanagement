import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ApiResponse, Tournes, UserColumns} from "../../../core/models/tournes";
import {TourneService} from "../../../core/services/tourne-service";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-tournes',
  templateUrl: './tournes.component.html',
  styleUrl: './tournes.component.scss'
})
export class TournesComponent implements OnInit{
  dataSource = new MatTableDataSource<Tournes>();
  columnsSchema: any = UserColumns;
  valid: { [id: number]: { [key: string]: boolean } } = {};
  varPourAjouter = 'ajouter une tournée';
  varPourSupprimer = 'supprimer de(s) tournée(s)';
  constructor(private tourneService: TourneService) {}

  ngOnInit() {
    this.tourneService.getTrounes().subscribe((res: any) => {
      this.dataSource.data = res;
    });
    console.log(this.dataSource.data);

  }

  removeSelectedRows() {
    const users = this.dataSource.data.filter((u: Tournes) => u.isSelected);
    this.tourneService.deleteTrounes(users)
      .subscribe(()=> this.dataSource.data = this.dataSource.data.filter(
        (u: Tournes) => !u.isSelected,
      ));
  }
  addRow() {

    const newRow: Tournes = {
      id: 0,
      start_date: '2023-12-15',
      end_date: '2023-12-16',
      starting_point_latitude: 0,
      starting_point_longitude: 0,
      isEdit: true,
      isSelected: false,
    }

    this.dataSource.data = [newRow, ...this.dataSource.data]
  }

  editRow(deleveryPerson: Tournes) {
    if (deleveryPerson.id === 0) {
      this.tourneService.addTrounes(deleveryPerson).subscribe((response: ApiResponse<Tournes>) => {
        const newTroune = response.data;
        deleveryPerson.id = newTroune.id;
        deleveryPerson.isEdit = false;
      })
    } else {
      this.tourneService.updateTrounes(deleveryPerson).subscribe(() => {
        deleveryPerson.isEdit = false;
      });
    }
  }

  removeRow(id: number) {
    this.tourneService.deleteTroune(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: Tournes) => u.id !== id,
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
