import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'toolbar',
    styleUrls: ['toolbar.component.scss'],
    templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent {

    @Output() 
    public open = new EventEmitter<Event>();

    constructor() {}

    public openSidenav($event): void {
        this.open.emit($event);
    }

}