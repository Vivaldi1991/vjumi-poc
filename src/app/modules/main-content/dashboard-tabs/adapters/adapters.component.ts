import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { AdaptersDatasourceService } from 'src/app/services/adapters-datasource/adapters-datasource.service';
import { AdaptersTableDataSource, AdaptersTableItem } from 'src/app/services/adapters-datasource/adapters.datasource';
import { IModalConfig, ModalServiceService } from 'src/app/services/modal-service/modal-service.service';
import { NewAdaptersItemComponent } from './new-adapters-item/new-adapters-item.component';

@Component({
    selector: 'app-adapters',
    templateUrl: './adapters.component.html',
    styleUrls: ['./adapters.component.scss']
})
export class AdaptersComponent {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<AdaptersTableItem>;
    dataSource: AdaptersTableDataSource;
    @ViewChild('filter') filter!: ElementRef;


    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['status', 'imei', 'anbieter', 'fahrzeug', 'kunde', 'kennzeichen', 'vin', 'menu'];

    constructor(
        private modalService: ModalServiceService,
        private adaptersDatasourceService: AdaptersDatasourceService
    ) {
        this.dataSource = this.adaptersDatasourceService.getadaptersList();
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

    openNewItemDialog() {
        const config: IModalConfig = {...this.modalService.defaultConfig};
        config.data.templateRef = NewAdaptersItemComponent;
        config.id = "newAdapter";
        config.data.title = "New adapter";
        config.width = "350px";
        this.modalService.openModal(config)
    }
}