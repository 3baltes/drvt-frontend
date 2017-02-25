import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AnalyseComponent } from './analyse.component';
import { AnalyseRoutingModule } from './anaylse-routing.module';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    AnalyseRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ AnalyseComponent ]
})
export class AnalyseModule { }
