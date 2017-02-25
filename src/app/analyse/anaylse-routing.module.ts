import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AnalyseComponent } from './analyse.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyseComponent,
    data: {
      title: 'Analyse'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyseRoutingModule {}
