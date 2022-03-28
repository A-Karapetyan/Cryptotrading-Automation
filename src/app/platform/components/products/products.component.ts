import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@platform/services/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
  }

  private getProducts() {
    this.apiService.getProducts().subscribe(data => {
      console.log(data);
      
    });
  }
  

}
