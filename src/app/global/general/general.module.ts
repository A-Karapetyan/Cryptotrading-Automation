import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarouselComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    MDBBootstrapModule,
    CarouselComponent,
    HttpClientModule,
    ProductCardComponent,
    ReactiveFormsModule,
  ],
})
export class GeneralModule { }
