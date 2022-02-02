import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-totals-list',
    templateUrl: './totals-list.component.html',
    styleUrls: ['./totals-list.component.scss']
})
export class TotalsListComponent {
    public totals = [
        {
            title: "registrierte fagrezeuge",
            number: 19,
            color: "#4391ab",
            items: [
                {
                    name: "Anzahl Adapter",
                    value: 12
                },
                {
                    name: "Anzahl Cloud",
                    value: 3
                },
                {
                    name: "Ohne Telemetr...",
                    value: 4
                }
            ]
        },
        {
            title: "verfugbare adapter",
            number: 3,
            color: "#863a9c",
            items: [
                {
                    name: "Gesamt",
                    value: 22
                },
                {
                    name: "Verbunden",
                    value: 10
                },
                {
                    name: "Getrennt",
                    value: 9
                }
            ]
        },
        {
            title: "anzahl aktive dtc's",
            number: 10,
            color: "#bd5a2b",
        },
        {
            title: "anzahl anstehender services",
            number: 5,
            color: "#6c797d",
            items: [
                {
                    name: "in 60 Tagen",
                    value: 8
                }
            ]
        },
    ];
}
