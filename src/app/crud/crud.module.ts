import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CrudRoutingModule} from "./crud-routing.module";
import { IndexComponent } from './components/index/index.component';
import { ParticipantsAllComponent } from './components/participants-all/participants-all.component';
import { ParticipantsCreateComponent } from './components/participants-create/participants-create.component';
import { ParticipantsDeleteComponent } from './components/participants-delete/participants-delete.component';
import { ParticipantsReadComponent } from './components/participants-read/participants-read.component';
import { ParticipantsUpdateComponent } from './components/participants-update/participants-update.component';
import {ParticipantService} from "./services/participants.service";

@NgModule({
  declarations: [
    IndexComponent,
    ParticipantsAllComponent,
    ParticipantsCreateComponent,
    ParticipantsDeleteComponent,
    ParticipantsReadComponent,
    ParticipantsUpdateComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    ParticipantService
  ]
})
export class CrudModule { }
