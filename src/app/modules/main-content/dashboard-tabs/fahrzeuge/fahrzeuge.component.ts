import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { fromEvent, debounceTime, distinctUntilChanged } from 'rxjs';
import { NewItemModalComponent } from '../new-item-modal/new-item-modal.component';
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
    animal!: string;
    name!: string;
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['status', 'fahrzeug', 'kunde', 'kennzeichen', 'km_stand', 'nachster_service', 'fehler', 'letzte_meldung', 'menu'];

    constructor(public dialog: MatDialog) {
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

    openDialog(): void {
        const dialogRef = this.dialog.open(NewItemModalComponent, {
          width: '250px',
          data: {name: this.name, animal: this.animal},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
    }
}
