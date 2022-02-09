import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';

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
        kunde: "Melanie Kolbe",
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
        kunde: "Emilia Baumgartner",
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
        kunde: "Louisa Berg",
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
    {
        id: 11,
        status: 'verbunden',
        fahrzeug: "BMW 1er Hatchback (F40)",
        kunde: "Piter Miles",
        kennzeichen: "KMY TD 19E",
        km_stand: 150,
        nachster_service: "HU",
        fehler: 5,
        letzte_meldung: "29.03.21 08:53",
    },
    {
        id: 12,
        status: 'verbunden',
        fahrzeug: "BMW 2 Series Active Tourer (U06)",
        kunde: "Bart Thomson",
        kennzeichen: "RSK AT 26E",
        km_stand: 23,
        nachster_service: "Auto service",
        fehler: 2,
        letzte_meldung: "23.01.21 18:33",
    },
    {
        id: 13,
        status: 'verbunden',
        fahrzeug: "OPEL ZAFIRA B",
        kunde: "Swen Beyer",
        kennzeichen: "RAK KL 34E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 14,
        status: 'getrennt',
        fahrzeug: "BMW X5 (G05, F95)",
        kunde: "Emil Fürst",
        kennzeichen: "FDS SA 67S",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 15,
        status: 'getrennt',
        fahrzeug: "OPEL ASTRA H",
        kunde: "Jakob Fromm",
        kennzeichen: "WOL SX 34E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 16,
        status: 'getrennt',
        fahrzeug: "BMW X7 (G07, F95)",
        kunde: "Hilko Richter",
        kennzeichen: "FRE DT 34D",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 17,
        status: 'verbunden',
        fahrzeug: "BMW X5 (F95)",
        kunde: "Ernst Dresdner",
        kennzeichen: "CXS AZ 56G",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 18,
        status: 'verbunden',
        fahrzeug: "OPEL ZAFIRA B",
        kunde: "Alexander Sachs",
        kennzeichen: "OPL SA 78F",
        km_stand: 12,
        nachster_service: "Auto repairs",
        fehler: 1,
        letzte_meldung: "04.08.21 12:33",
    },
    {
        id: 19,
        status: 'getrennt',
        fahrzeug: "BMW X5 (G05, F95)",
        kunde: "Heidi Schuster",
        kennzeichen: "WSX AZ 96E",
        km_stand: 56,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.11.20 17:33",
    },
    {
        id: 20,
        status: 'getrennt',
        fahrzeug: "OPEL ASTRA H",
        kunde: "Andrea Biermann",
        kennzeichen: "ERF SD 57C",
        km_stand: 125,
        nachster_service: "Auto repairs",
        fehler: 2,
        letzte_meldung: "11.11.20 14:33",
    },
    {
        id: 21,
        status: 'verbunden',
        fahrzeug: "BMW X7 (G07, F95)",
        kunde: "Hilke Esser",
        kennzeichen: "CVF XC 63M",
        km_stand: 150,
        nachster_service: "HU",
        fehler: 5,
        letzte_meldung: "29.03.21 08:53",
    },
    {
        id: 22,
        status: 'verbunden',
        fahrzeug: "BMW X5 (F95)",
        kunde: "Helga Goldschmidt",
        kennzeichen: "CVF ZA 90E",
        km_stand: 23,
        nachster_service: "Auto service",
        fehler: 2,
        letzte_meldung: "23.01.21 18:33",
    },
    {
        id: 23,
        status: 'verbunden',
        fahrzeug: "OPEL ZAFIRA B",
        kunde: "Fanny Sternberg",
        kennzeichen: "OKM LG 34E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 24,
        status: 'getrennt',
        fahrzeug: "BMW X5 (G05, F95)",
        kunde: "Pamela Sauer",
        kennzeichen: "EDC XZ 67E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 25,
        status: 'getrennt',
        fahrzeug: "OPEL ASTRA H",
        kennzeichen: "FVC FD 57Y",
        kunde: "Kalr Wolf",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 26,
        status: 'getrennt',
        fahrzeug: "BMW X7 (G07, F95)",
        kunde: "Gretel Heinrich",
        kennzeichen: "SDF DT 16E",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 27,
        status: 'verbunden',
        fahrzeug: "BMW X5 (F95)",
        kunde: "Kalr Wolf",
        kennzeichen: "LKJ DT 21C",
        km_stand: 34,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.08.20 17:33",
    },
    {
        id: 28,
        status: 'verbunden',
        fahrzeug: "OPEL ZAFIRA B",
        kunde: "Ella Blau",
        kennzeichen: "VBN KL 38C",
        km_stand: 12,
        nachster_service: "Auto repairs",
        fehler: 1,
        letzte_meldung: "04.08.21 12:33",
    },
    {
        id: 29,
        status: 'getrennt',
        fahrzeug: "BMW X5 (G05, F95)",
        kunde: "Monika Breiner",
        kennzeichen: "OJD DT 65B",
        km_stand: 56,
        nachster_service: "Auto repairs",
        fehler: 0,
        letzte_meldung: "14.11.20 17:33",
    },
    {
        id: 30,
        status: 'getrennt',
        fahrzeug: "OPEL ASTRA H",
        kunde: "Daniel Trost",
        kennzeichen: "VBG FD 58Z",
        km_stand: 125,
        nachster_service: "Auto repairs",
        fehler: 2,
        letzte_meldung: "11.11.20 14:33",
    },
];

export class FahrzeugTableDataSource extends DataSource<FahrzeugTableItem> {
    _dataChange = new BehaviorSubject([...FAHREZUG_DATA]);
    get data(): FahrzeugTableItem[] { return this._dataChange.value; }
    set data(data: FahrzeugTableItem[]) {        
        this._dataChange.next(data); 
    }

    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) {        
        this._filterChange.next(filter); 
    }

    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor() {
        super();
    }

    connect(): Observable<FahrzeugTableItem[]> {
        if (this.paginator && this.sort) {

            return merge(this._dataChange, this.paginator.page, this.sort.sortChange, this._filterChange)               
                .pipe(map(() => {  
                    const filteredData = this.getFilteredData([...this.data]);                 
                    return this.getPagedData(this.getSortedData(filteredData)); // TODO: looks ugly 
                }));
        } else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }

    disconnect(): void { }


    private getPagedData(data: FahrzeugTableItem[]): FahrzeugTableItem[] {
            
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        } else {
            return data;
        }
    }

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
                case 'km_stand': return compare(+a.km_stand, +b.km_stand, isAsc);
                case 'nachster_service': return compare(a.nachster_service, b.nachster_service, isAsc);
                case 'fehler': return compare(+a.fehler, +b.fehler, isAsc);
                case 'letzte_meldung': return compare(a.letzte_meldung, b.letzte_meldung, isAsc);

                default: return 0;
            }
        });
    }

    private getFilteredData(data: FahrzeugTableItem[]): FahrzeugTableItem[] {        
        if (!this.filter) {
            return data;
        }
            
        const returnedData = data.slice().filter((item: FahrzeugTableItem) => {
            const fieldsToSearch = item.status  + item.fahrzeug + item.kunde + item.kennzeichen
                + item.km_stand + item.nachster_service + item.fehler + item.letzte_meldung;

            const searchStr = fieldsToSearch.toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        });
        
        return returnedData;
    }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
