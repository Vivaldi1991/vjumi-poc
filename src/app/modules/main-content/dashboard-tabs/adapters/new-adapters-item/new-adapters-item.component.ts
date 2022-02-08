import { Component, Input, OnInit } from '@angular/core';
import { IModalTemplate } from 'src/app/services/modal-service/modal-template/modal-template.component';

@Component({
  selector: 'app-new-adapters-item',
  templateUrl: './new-adapters-item.component.html',
  styleUrls: ['./new-adapters-item.component.scss']
})
export class NewAdaptersItemComponent implements OnInit, IModalTemplate {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
