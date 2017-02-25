import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {HostsComponent} from "./hosts.component";
import {HostsRoutingModule} from "./hosts-routing.module";
import {CommonModule} from "@angular/common";
import {HostComponent} from "../partials/host/host.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    HostsRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    HostsComponent,
    HostComponent
  ]
})
export class HostsModule { }
