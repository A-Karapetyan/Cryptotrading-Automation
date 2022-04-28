import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSymptomComponent } from '@platform/components/create-symptom/create-symptom.component';
import { DetailsComponent } from '@platform/components/details/details.component';
import { HomeComponent } from '@platform/components/home/home.component';
import { MySymptomsComponent } from '@platform/components/my-symptoms/my-symptoms.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'my-symptoms', component: MySymptomsComponent},
    {path: 'create-symptom', component: CreateSymptomComponent},
    {path: 'create-symptom/:id', component: CreateSymptomComponent},
    {path: '', redirectTo: 'home'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspacePublicRoutingModule { }
