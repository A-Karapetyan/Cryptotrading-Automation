import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemCryptoComponent } from './item-crypto/item-crypto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarouselComponent,
    ItemCryptoComponent
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
    ItemCryptoComponent,
    ReactiveFormsModule,
  ],
}) 
export class GeneralModule { }
