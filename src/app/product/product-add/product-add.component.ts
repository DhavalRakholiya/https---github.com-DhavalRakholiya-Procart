import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm = new FormGroup(
    {
      product: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(7)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(4)])
    }
  )

  constructor() { }

  ngOnInit(): void {
  }
  
  AddProduct() {
    console.log(this.productAddForm.value)
  }

}
