import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import {HostsComponent} from "./hosts.component";


const routes: Routes = [
  {
    path: '',
    component: HostsComponent,
    data: {
      title: 'Hosts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostsRoutingModule {}
