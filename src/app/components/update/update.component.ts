import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product: any
  constructor( private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)

    this.productService.getOneProduct(id).subscribe({
      next: data => {
        this.product = data
        console.table(this.product)
      },
      error: err => {
        console.error(err)
      }
    })
  }

  updateProduct(id: string): void {
    const { title, image, price, category } = this.product
    if(this.product)
    this.productService.updateProduct(id, { title, image, price, category }).subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
