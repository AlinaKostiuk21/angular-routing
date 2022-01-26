import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'asia-olympic-games',
    loadChildren: () => import('./asia-olympic-games/asia-olympic-games-module').then(m => m.AsiaOlympicGamesModule)
  },

  {
    path: 'territory',
    loadChildren: () => import('./territory/territory-module').then(m => m.TerritoryModule)
  },

  {
    path: 'sport',
    loadChildren: () => import('./sport/sport-module').then(m => m.SportModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
