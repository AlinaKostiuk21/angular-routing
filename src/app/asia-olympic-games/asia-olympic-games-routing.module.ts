import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OlympicSportTypesComponent} from "./components/olympicSportTypes/OlympicSportTypes.component";
import {ParticipantsComponent} from "./components/participants/Participants.component";
import {WinnersComponent} from "./components/winners/Winners.component";

const routes: Routes = [
  {path: 'olympic-sport-types', component: OlympicSportTypesComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'winners', component: WinnersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AsiaOlympicGamesRoutingModule {
}
