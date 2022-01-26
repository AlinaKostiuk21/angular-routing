import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContinentsComponent} from "./components/continents/Continents.component";
import {CountriesComponent} from "./components/countries/Countries.component";


const routes: Routes = [
  {path: 'continents', component: ContinentsComponent},
  {path: 'countries', component: CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TerritoryRoutingModule {
}
