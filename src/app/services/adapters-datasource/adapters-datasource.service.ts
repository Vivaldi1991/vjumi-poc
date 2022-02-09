import { Injectable } from '@angular/core';
import { AdaptersTableDataSource, AdaptersTableItem } from './adapters.datasource';

@Injectable({
    providedIn: 'root'
})
export class AdaptersDatasourceService {

    public __adaptersList!: AdaptersTableDataSource;

    constructor() {
        this.__adaptersList = new AdaptersTableDataSource();
    }

    public getadaptersList() {
        return this.__adaptersList;
    }

    public addAdapters(item: AdaptersTableItem) {
        const newData = [...this.__adaptersList.data];
        newData.unshift(item);
        this.__adaptersList.data = newData;
    }
}
