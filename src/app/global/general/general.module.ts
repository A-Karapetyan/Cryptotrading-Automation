import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemCryptoComponent } from './item-crypto/item-crypto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';


@NgModule({
  declarations: [
    CarouselComponent,
    ItemCryptoComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MDBBootstrapModule,
    CarouselComponent,
    HttpClientModule,
    ItemCryptoComponent,
    ReactiveFormsModule,
    LineChartComponent
  ],
}) 
export class GeneralModule { }
