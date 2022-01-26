import {NgModule} from "@angular/core";
import {OlympicSportTypesComponent} from "./components/olympicSportTypes/OlympicSportTypes.component";
import {ParticipantsComponent} from "./components/participants/Participants.component";
import {WinnersComponent} from "./components/winners/Winners.component";
import {AsiaOlympicGamesRoutingModule} from "./asia-olympic-games-routing.module";

@NgModule({
  declarations: [
    OlympicSportTypesComponent,
    ParticipantsComponent,
    WinnersComponent
  ],
  imports: [
    AsiaOlympicGamesRoutingModule
  ],
  providers: [],
})

export class AsiaOlympicGamesModule {
}
