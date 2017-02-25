import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from './container-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ContainerRoutingModule,
      FormsModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ContainerComponent ]
})
export class ContainerModule { }
