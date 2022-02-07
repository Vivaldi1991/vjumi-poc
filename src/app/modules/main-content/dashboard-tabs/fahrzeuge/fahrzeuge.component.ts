import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable, fromEvent, debounceTime, distinctUntilChanged } from 'rxjs';
import { FahrzeugTableDataSource, FahrzeugTableItem } from './fahrzeuge.datasource';

@Component({
  selector: 'app-fahrzeuge',
  templateUrl: './fahrzeuge.component.html',
  styleUrls: ['./fahrzeuge.component.scss']
})
export class FahrzeugeComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FahrzeugTableItem>;
  @ViewChild('filter') filter!: ElementRef;

  dataSource: FahrzeugTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['status','fahrzeug', 'kunde', 'kennzeichen', 'km_stand', 'nachster_service', 'fehler', 'letzte_meldung', 'menu'];

  constructor() {
      this.dataSource = new FahrzeugTableDataSource();
  }

  ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.dataSource.filter = this.filter.nativeElement.value;

    fromEvent(this.filter.nativeElement, 'keyup')
        .pipe(debounceTime(600))
        .pipe(distinctUntilChanged())
        .subscribe(() => {
            if (!this.dataSource) { return; }            
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
}
