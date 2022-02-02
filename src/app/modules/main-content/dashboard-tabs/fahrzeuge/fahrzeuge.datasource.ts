import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface FahrzeugTableItem {
    id: number;
    status: string;
    fahrzeug: string;
    kunde: string;
    kennzeichen: string;
    km_stand: number;
    nachster_service: string;
    fehler: number;
    letzte_meldung: string;
}

const FAHREZUG_DATA: FahrzeugTableItem[] = [
    { 
        id: 1, 
        status: 'verbunden', 
        fahrzeug: "BMW X7 (G07, F95)", 
        kunde: "Daniel Trost",
        kennzeichen: "MYK DT 16E",
        km_stand: 150,
        nachster_service: "HU",
        fehler: 5,
        letzte_meldung: "29.03.21 08:53",
    },
    { 
        id: 2, 
        status: 'verbunden', 
        fahrzeug: "BMW X5 (F95)", 
        kunde: "Martin Frost",
        kennzeichen: "DEK DT 26E",
        km_stand: 23,
        nachster_service: "Auto service",
        fehler: 2,
        letzte_meldung: "23.01.21 18:33",
    },
    { 
        id: 3, 
        status: 'verbunden', 
        fahrzeug: "OPEL ZAFIRA B", 
        kunde: "Wolf Kungen",
        kennzeichen: "RAK KL 34E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    { 
        id: 4, 
        status: 'getrennt', 
        fahrzeug: "BMW X5 (G05, F95)", 
        kunde: "Kalr Wolf",
        kennzeichen: "QAZ DT 67E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    { 
        id: 5, 
        status: 'getrennt', 
        fahrzeug: "OPEL ASTRA H", 
        kunde: "Marla Singer",
        kennzeichen: "WER FD 56E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    { 
        id: 6,
        status: 'getrennt', 
        fahrzeug: "BMW X7 (G07, F95)", 
        kunde: "Daniel Trost",
        kennzeichen: "MYK DT 16E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    { 
        id: 7, 
        status: 'verbunden', 
        fahrzeug: "BMW X5 (F95)", 
        kunde: "Martin Frost",
        kennzeichen: "DEK DT 26E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    { 
        id: 8, 
        status: 'verbunden', 
        fahrzeug: "OPEL ZAFIRA B", 
        kunde: "Wolf Kungen",
        kennzeichen: "RAK KL 34E",
        km_stand: 12,
        nachster_service: "Auto repairs",
        fehler: 1,
        letzte_meldung: "04.08.21 12:33",
    },
    { 
        id: 9, 
        status: 'getrennt',
        fahrzeug: "BMW X5 (G05, F95)", 
        kunde: "Kalr Wolf",
        kennzeichen: "QAZ DT 67E",
        km_stand: 56,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.11.20 17:33",
    },
    { 
        id: 10, 
        status: 'getrennt',
        fahrzeug: "OPEL ASTRA H", 
        kunde: "Marla Singer",
        kennzeichen: "WER FD 56E",
        km_stand: 125,
        nachster_service: "Auto repairs",
        fehler: 2,
        letzte_meldung: "11.11.20 14:33",
    },
];


export class FahrzeugTableDataSource extends DataSource<FahrzeugTableItem> {
    data: FahrzeugTableItem[] = FAHREZUG_DATA;
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor() {
        super();
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<FahrzeugTableItem[]> {
        if (this.paginator && this.sort) {
            // Combine everything that affects the rendered data into one update
            // stream for the data-table to consume.
            return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
                .pipe(map(() => {
                    return this.getPagedData(this.getSortedData([...this.data]));
                }));
        } else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect(): void { }

    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: FahrzeugTableItem[]): FahrzeugTableItem[] {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        } else {
            return data;
        }
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: FahrzeugTableItem[]): FahrzeugTableItem[] {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const isAsc = this.sort?.direction === 'asc';
            switch (this.sort?.active) {
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'status': return compare(a.status, b.status, isAsc);
                case 'fahrzeug': return compare(a.fahrzeug, b.fahrzeug, isAsc);
                case 'kunde': return compare(a.kunde, b.kunde, isAsc);
                case 'kennzeichen': return compare(a.kennzeichen, b.kennzeichen, isAsc);
                case 'km_stand': return compare(+a.fahrzeug, +b.fahrzeug, isAsc);
                case 'nachster_service': return compare(a.kunde, b.kunde, isAsc);
                case 'fehler': return compare(+a.kennzeichen, +b.kennzeichen, isAsc);
                case 'letzte_meldung': return compare(a.kennzeichen, b.kennzeichen, isAsc);

                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
