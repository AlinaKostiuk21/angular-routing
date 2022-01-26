import {NgModule} from "@angular/core";
import {OlympicSportTypesComponent} from "./components/olympicSportTypes/OlympicSportTypes.component";
import  {ParticipantsComponent} from "./components/participants/Participants.component";
import {WinnersComponent} from "./components/winners/Winners.component";

@NgModule({
  declarations: [
    OlympicSportTypesComponent,
    ParticipantsComponent,
    WinnersComponent
  ],
  imports: [],
  providers: [],
})

export class AsiaOlympicGamesModule {}
