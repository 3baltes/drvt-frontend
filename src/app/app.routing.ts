import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'container',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'container',
        loadChildren: './container/container.module#ContainerModule'
      },
      {
        path: 'hosts',
        loadChildren: './hosts/hosts.module#HostsModule'
      },
      {
        path: 'analyse',
        loadChildren: './analyse/analyse.module#AnalyseModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
