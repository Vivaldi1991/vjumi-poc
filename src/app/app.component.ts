import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewFahrzeugeItemComponent } from './modules/main-content/dashboard-tabs/fahrzeuge/new-fahrzeuge-item/new-fahrzeuge-item.component';
import { IModalConfig, ModalServiceService } from './services/modal-service/modal-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    title = 'vjumi-poc';

    constructor(
        private modalService: ModalServiceService,
    ) {}
    
    ngOnInit(): void {
        window.addEventListener('keydown', (event) => {
            if (event.shiftKey && event.code === 'KeyN') {
                this.openDialog();
            }
        });
    }

    openDialog(): void {
        const config: IModalConfig = {...this.modalService.defaultConfig};
        config.id = "newFahrzeuge";
        config.data.templateRef = NewFahrzeugeItemComponent;
        config.data.title = "New fahrzeuge";
        config.width = "650px";
        this.modalService.openModal(config)
    }
}
