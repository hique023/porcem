import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sobre',
        loadChildren: () => import('../sobre/sobre.module').then( m => m.SobrePageModule)
      },
      {
        path: 'calculo',
        loadChildren: () => import('../calculo/calculo.module').then( m => m.CalculoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/calculo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calculo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
