import { Component, Input, OnInit } from '@angular/core';
import { IModalTemplate } from 'src/app/services/modal-service/modal-template/modal-template.component';

@Component({
  selector: 'app-new-fahrzeuge-item',
  templateUrl: './new-fahrzeuge-item.component.html',
  styleUrls: ['./new-fahrzeuge-item.component.scss']
})
export class NewFahrzeugeItemComponent implements OnInit, IModalTemplate  {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
