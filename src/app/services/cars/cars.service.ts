import { Injectable } from '@angular/core';
import cars from './cars-data';

export interface ICars {
    img: string,
    hersteller: string,
    modell: string,
    baujahr: string,
    leistung: string,
    kraftsoffart: string,
    kraftsoffaufbereitung: string,
    hibraum: string,
    aufbauart: string,
    antribsart: string,
    zylinder: number,
    ventile_pro_brennraum: number,
    motorart: string,
    kba_nummern: string,
    motorcodes: string,
    interne_nummer: string,
}

@Injectable({
    providedIn: 'root'
})

export class CarsService {

    /**
     * Todo real fetch on promises
     */
    private carsSpec = cars;

    public getCarsSpecList(): ICars[] {
        return cars;
    }
}
