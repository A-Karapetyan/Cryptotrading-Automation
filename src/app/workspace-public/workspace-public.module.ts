import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacePublicRoutingModule } from './workspace-public-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from '@platform/components/home/home.component';
import { GeneralModule } from '@app/global/general/general.module';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    WorkspacePublicRoutingModule,
    GeneralModule,
  ]
})
export class WorkspacePublicModule { }
