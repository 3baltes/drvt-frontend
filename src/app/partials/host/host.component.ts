import {Component, OnInit, Input} from '@angular/core';
import {Host} from "../../resources/HostResource";

@Component({
    selector: 'host',
    templateUrl: 'host.component.html',
    styleUrls: [
        'host.component.scss'
    ]
})
export class HostComponent{
    @Input()
    host = null as Host;
}
