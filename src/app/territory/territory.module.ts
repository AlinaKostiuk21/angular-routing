import {NgModule} from "@angular/core";
import {ContinentsComponent} from "./components/continents/Continents.component";
import {CountriesComponent} from "./components/countries/Countries.component";
import {TerritoryRoutingModule} from "./territory-routing.module";


@NgModule({
  declarations: [
    ContinentsComponent,
    CountriesComponent
  ],
  imports: [TerritoryRoutingModule],
  providers: [],
  bootstrap: [],
})

export class TerritoryModule {
}
