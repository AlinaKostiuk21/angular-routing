import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TypesComponent} from "./components/types/Types.component";

const routes: Routes = [
  {path: 'types', component: TypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SportRoutingModule {
}
