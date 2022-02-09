import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { fromEvent, debounceTime, distinctUntilChanged } from 'rxjs';
import { FahrzeugDatasourceService } from 'src/app/services/fahrzeug-datasource/fahrzeug-datasource.service';
import { FahrzeugTableDataSource, FahrzeugTableItem } from 'src/app/services/fahrzeug-datasource/fahrzeuge.datasource';
import { IModalConfig, ModalServiceService } from 'src/app/services/modal-service/modal-service.service';
import { NewFahrzeugeItemComponent } from './new-fahrzeuge-item/new-fahrzeuge-item.component';

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
    displayedColumns = ['status', 'fahrzeug', 'kunde', 'kennzeichen', 'km_stand', 'nachster_service', 'fehler', 'letzte_meldung', 'menu'];

    constructor(
        private modalService: ModalServiceService,
        private fahrzeugDatasourceService: FahrzeugDatasourceService
    ) {
        this.dataSource = this.fahrzeugDatasourceService.getFahrzeugList();
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
        const config: IModalConfig = {...this.modalService.defaultConfig};
        config.data.templateRef = NewFahrzeugeItemComponent;
        config.data.title = "New fahrzeuge";
        config.width = "650px";
        this.modalService.openModal(config)

        this.fahrzeugDatasourceService.addFahrzeug({
            id: 31,
            status: 'getrennt',
            fahrzeug: "OPEL ASTRA OPC",
            kunde: "Daniel Trost",
            kennzeichen: "VBG FD 58Z",
            km_stand: 125,
            nachster_service: "Auto repairs",
            fehler: 2,
            letzte_meldung: "11.11.20 14:33"}
        );

    }
}
