import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacePublicRoutingModule } from './workspace-public-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from '@platform/components/home/home.component';
import { GeneralModule } from '@app/global/general/general.module';
import { DetailsComponent } from '@platform/components/details/details.component';
import { MySymptomsComponent } from '@platform/components/my-symptoms/my-symptoms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    DetailsComponent,
    MySymptomsComponent
  ],
  imports: [
    CommonModule,
    WorkspacePublicRoutingModule,
    GeneralModule,
    FormsModule
  ]
})
export class WorkspacePublicModule { }
