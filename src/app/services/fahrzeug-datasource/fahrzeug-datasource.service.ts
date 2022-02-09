import { Injectable } from '@angular/core';
import { FahrzeugTableDataSource, FahrzeugTableItem } from './fahrzeuge.datasource';

@Injectable({
    providedIn: 'root'
})
export class FahrzeugDatasourceService {

    public __fahrzeugList!: FahrzeugTableDataSource;

    constructor() {
        this.__fahrzeugList = new FahrzeugTableDataSource();
    }

    public getFahrzeugList() {
        return this.__fahrzeugList;
    }

    public addFahrzeug(item: FahrzeugTableItem) {
        const newData = [...this.__fahrzeugList.data];
        let maxID = Math.max(...newData.map(el => el.id), 0);
        newData.unshift({...item, id: ++maxID});
        this.__fahrzeugList.data = newData;        
    }
}
