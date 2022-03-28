import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@platform/components/home/home.component';
import { ProductsComponent } from '@platform/components/products/products.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home'},
    {path: 'products', component: ProductsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspacePublicRoutingModule { }
