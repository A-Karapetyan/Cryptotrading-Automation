import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacePublicRoutingModule } from './workspace-public-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from '@platform/components/home/home.component';
import { GeneralModule } from '@app/global/general/general.module';
import { DetailsComponent } from '@platform/components/details/details.component';
import { MySymptomsComponent } from '@platform/components/my-symptoms/my-symptoms.component';
import { FormsModule } from '@angular/forms';
import { CreateSymptomComponent } from '@platform/components/create-symptom/create-symptom.component';
import { CryptoService } from '@platform/services/crypto.service';
import { ToasterService } from '@platform/services/toaster.service';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    DetailsComponent,
    MySymptomsComponent,
    CreateSymptomComponent
  ],
  imports: [
    CommonModule,
    WorkspacePublicRoutingModule,
    GeneralModule,
    FormsModule
  ],
  providers: [CryptoService, ToasterService]
})
export class WorkspacePublicModule { }
