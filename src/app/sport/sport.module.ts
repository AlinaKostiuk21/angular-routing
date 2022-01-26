import {NgModule} from "@angular/core";
import {TypesComponent} from "./components/types/Types.component";
import {SportRoutingModule} from "./sport-routing.module";

@NgModule({
  declarations: [
    TypesComponent,
  ],
  imports: [SportRoutingModule],
  providers: [],
})

export class SportModule {
}
