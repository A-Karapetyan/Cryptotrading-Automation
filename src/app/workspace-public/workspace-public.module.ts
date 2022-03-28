import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacePublicRoutingModule } from './workspace-public-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from '@platform/components/home/home.component';
import { GeneralModule } from '@app/global/general/general.module';
import { ProductsComponent } from '@platform/components/products/products.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    WorkspacePublicRoutingModule,
    GeneralModule,
  ]
})
export class WorkspacePublicModule { }
