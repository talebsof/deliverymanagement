import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Input } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent implements OnInit{
  @Input() columnsSchema: any[] = [];
  @Output() addRow = new EventEmitter<void>();
  @Output() removeSelectedRows = new EventEmitter<void>();
  @Output() selectionChanged = new EventEmitter<any[]>();
  @Output() removeRow = new EventEmitter<number>();
  @Output() filterData = new EventEmitter<string>();
  @Output() editSubmit = new EventEmitter<any>();
  @Output() inputChanged = new EventEmitter<{ event: any, id: number, key: string }>();
  @Input() validationState!: { [id: number]: { [key: string]: boolean } };
  @Input() varPourAjouter = '';
  @Input() varPourSupprimer = '';

  displayedColumns!: string[];
  dataSource = new MatTableDataSource<any>();
  private _dataInput: any[] = [];

  @Input()
  set dataInput(data: any[]) {
    this._dataInput = data;
    if (this.dataSource) {
      this.dataSource.data = data;
    }
  }

  get dataInput(): any[] {
    return this._dataInput;
  }
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    console.log(this.varPourAjouter);
    this.displayedColumns = this.columnsSchema.map(c => c.key);
    this.dataSource = new MatTableDataSource(this.dataInput);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter($event: any) {
    this.dataSource.filter = $event.target.value;
  }
  selectAll($event: any) {
    const newData = this.dataSource.data.map((item) => ({
      ...item,
      isSelected: $event.checked,
    }));

    this.dataSource.data = newData;
    this.selectionChanged.emit(newData);
  }

  isAllSelected() {
    return this.dataSource.data.every((item) => item.isSelected);
  }

  isAnySelected() {
    return this.dataSource.data.some((item) => item.isSelected);
  }


  emitRemoveRow(id:number) {
    this.removeRow.emit(id);
  }

  emitEditSubmit(row: any) {
    this.editSubmit.emit(row);
  }


  disableSubmit(id: number): boolean {
    const validation = this.validationState[id];
    if (validation) {
      return Object.values(validation).some(value => !value);
    }
    return false;
  }

  emitInputChanged(event: any, id: number, key: string) {
    this.inputChanged.emit({ event, id, key });
  }

  emitFilterData($event: any) {
      this.dataSource.filter = $event.target.value;
    }
}
