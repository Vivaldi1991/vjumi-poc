import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CarsService, ICars } from 'src/app/services/cars-service/cars.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
    public myControl = new FormControl();
    public options!: ICars[];
    public filteredOptions!: Observable<ICars[]>;

    constructor(private carsService: CarsService) {
        this.setOptions();
    }

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => (typeof value === 'string' ? value : value.modell)),
            map(modell => (modell ? this._filter(modell) : this.options.slice())),
        );
    }

    public displayFn(user: ICars): string {
        return user && user.modell ? user.modell : '';
    }

    public getInfo() {
        console.log(this.myControl.value);
    }

    public clearSearch() {
        this.myControl.setValue("");
    }


    private _filter(name: string): ICars[] {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.modell.toLowerCase().includes(filterValue));
    }

    private setOptions() {
        this.options = this.carsService.getCarsSpecList();
    }
}



