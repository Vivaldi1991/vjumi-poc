import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';

export interface AdaptersTableItem {
    id: number;
    status: string;
    imei: string;
    anbieter: string;
    fahrzeug: string;
    kunde: string;
    kennzeichen: string;
    vin: string;
}

const ADAPTERS_DATA: AdaptersTableItem[] = [
    { 
        id: 1, 
        status: 'verbunden', 
        imei: "045ab04b-4066-4856-b6e4-89a58dd85d5c", 
        anbieter: "bmw", 
        fahrzeug: "BMW X7 (G07, F95)", 
        kunde: "Daniel Trost",
        kennzeichen: "MYK DT 16E",
        vin: "WBATA619009G98456"
    },
    { 
        id: 2, 
        status: 'verbunden', 
        imei: "345ab04b-4567-1233-b6e4-67a58dd85d5c", 
        anbieter: "bmw", 
        fahrzeug: "BMW X5 (F95)", 
        kunde: "Martin Frost",
        kennzeichen: "DEK DT 26E",
        vin: "WBATS619345G98456"
    },
    { 
        id: 3, 
        status: 'verbunden', 
        imei: "325ab04b-5674-7988-b6e4-89a78gg88d5c", 
        anbieter: "OPEL", 
        fahrzeug: "OPEL ZAFIRA B", 
        kunde: "Wolf Kungen",
        kennzeichen: "RAK KL 34E",
        vin: "WBATA876549G98456"
    },
    { 
        id: 4, 
        status: 'getrennt', 
        imei: "045ab04b-4066-4856-b6e4-89a58dd85d5c", 
        anbieter: "bmw", 
        fahrzeug: "BMW X5 (G05, F95)", 
        kunde: "Kalr Wolf",
        kennzeichen: "QAZ DT 67E",
        vin: "WBATF4562219G98456"
    },
    { 
        id: 5, 
        status: 'getrennt', 
        imei: "045ab04b-4066-4856-b6e4-89a58dd85d5c", 
        anbieter: "OPEL", 
        fahrzeug: "OPEL ASTRA H", 
        kunde: "Marla Singer",
        kennzeichen: "WER FD 56E",
        vin: "WOLOA634563G98456"
    },
    { 
        id: 6, 
        status: 'verbunden', 
        imei: "045ab04b-4066-4856-b6e4-89a58dd85d5c", 
        anbieter: "bmw", 
        fahrzeug: "BMW X7 (G07, F95)", 
        kunde: "Daniel Trost",
        kennzeichen: "MYK FR 16E",
        vin: "WBATA619009G98456"
    },
    { 
        id: 7, 
        status: 'verbunden', 
        imei: "345ab04b-4567-1233-b6e4-67a58dd85d5c", 
        anbieter: "bmw", 
        fahrzeug: "BMW X5 (F95)", 
        kunde: "Martin Frost",
        kennzeichen: "DEK DT 26E",
        vin: "WBATS619345G98456"
    },
    { 
        id: 8, 
        status: 'verbunden', 
        imei: "325ab04b-5674-7988-b6e4-89a78gg88d5c", 
        anbieter: "OPEL", 
        fahrzeug: "OPEL ZAFIRA B", 
        kunde: "Wolf Kungen",
        kennzeichen: "RAK KL 34E",
        vin: "WBATA876549G98456"
    },
    { 
        id: 9, 
        status: 'getrennt', 
        imei: "045ab04b-4066-4856-b6e4-89a58dd85d5c", 
        anbieter: "bmw", 
        fahrzeug: "BMW X5 (G05, F95)", 
        kunde: "Kalr Wolf",
        kennzeichen: "QAZ DT 67E",
        vin: "WBATF4562219G98456"
    },
    { 
        id: 10, 
        status: 'getrennt', 
        imei: "045ab04b-4066-4856-b6e4-89a58dd85d5c", 
        anbieter: "OPEL", 
        fahrzeug: "OPEL ASTRA H", 
        kunde: "Marla Singer",
        kennzeichen: "WER FD 56E",
        vin: "WOLOA634563G98456"
    },
];


export class AdaptersTableDataSource extends DataSource<AdaptersTableItem> {    
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;
    
    _dataChange = new BehaviorSubject([...ADAPTERS_DATA]);
    get data(): AdaptersTableItem[] { return this._dataChange.value; }
    set data(data: AdaptersTableItem[]) {        
        this._dataChange.next(data); 
    }

    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) {        
        this._filterChange.next(filter); 
    }
    
    constructor() {
        super();
    }

    connect(): Observable<AdaptersTableItem[]> {
        if (this.paginator && this.sort) {
            return merge(this._dataChange, this.paginator.page, this.sort.sortChange, this._filterChange)
                .pipe(map(() => {
                    const filteredData = this.getFilteredData([...this.data]);
                    return this.getPagedData(this.getSortedData([...filteredData]));
                }));
        } else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }

    disconnect(): void { }

    private getPagedData(data: AdaptersTableItem[]): AdaptersTableItem[] {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        } else {
            return data;
        }
    }

    private getSortedData(data: AdaptersTableItem[]): AdaptersTableItem[] {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort?.direction === 'asc';
            switch (this.sort?.active) {
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'status': return compare(a.status, b.status, isAsc);
                case 'imei': return compare(a.imei, b.imei, isAsc);
                case 'anbieter': return compare(a.anbieter, b.anbieter, isAsc);
                case 'fahrzeug': return compare(a.fahrzeug, b.fahrzeug, isAsc);
                case 'kunde': return compare(a.kunde, b.kunde, isAsc);
                case 'kennzeichen': return compare(a.kennzeichen, b.kennzeichen, isAsc);
                case 'vin': return compare(a.vin, b.vin, isAsc);

                default: return 0;
            }
        });
    }

    private getFilteredData(data: AdaptersTableItem[]): AdaptersTableItem[] {        
        if (!this.filter) {
            return data;
        }
    
        const returnedData = data.slice().filter((item: AdaptersTableItem) => {
            const fieldsToSearch = item.status + item.imei + item.anbieter + item.fahrzeug
                + item.kunde + item.kennzeichen + item.vin;

            const searchStr = fieldsToSearch.toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        });
        
        return returnedData;
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
