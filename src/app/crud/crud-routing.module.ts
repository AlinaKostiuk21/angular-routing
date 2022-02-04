import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import {ParticipantsComponent} from "../asia-olympic-games/components/participants/Participants.component";
import {ParticipantsCreateComponent} from "./components/participants-create/participants-create.component";
import {ParticipantsReadComponent} from "./components/participants-read/participants-read.component";
import {ParticipantsUpdateComponent} from "./components/participants-update/participants-update.component";
import {ParticipantsDeleteComponent} from "./components/participants-delete/participants-delete.component";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'all',
        component: ParticipantsComponent,
      },
      {
        path: 'create',
        component: ParticipantsCreateComponent,
      },
      {
        path: ':student_id',
        children: [
          {
            path: 'read',
            component: ParticipantsReadComponent,
          },
          {
            path: 'update',
            component: ParticipantsUpdateComponent,
          },
          {
            path: 'delete',
            component: ParticipantsDeleteComponent,
          },
        ]
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
