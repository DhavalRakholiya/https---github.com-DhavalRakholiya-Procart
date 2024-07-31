import { Component, OnInit } from '@angular/core';

interface Product {
  product: string,
  category: string,
  description: string,
  price: number,
  quantity: number
}

const products: Product[] = [
  {product: 'iPhone 15 Pro', category: 'Smartphone', description:"Features a 6.1-inch Super Retina XDR display, A17 Pro chip, triple-camera system, and supports 5G connectivity.", price: 64000, quantity: 46},
  {product: 'MacBook Air M2 (2023)', category: 'Laptop', description:"Equipped with Apple's M2 chip, a 13.6-inch Retina display, and up to 18 hours of battery life.", price: 155599, quantity: 10},
  {product: 'Samsung QLED Q80C (55-inch)', category: 'Smart TVs', description:"Offers a Quantum Dot display, 4K resolution, and advanced gaming features.", price: 55000, quantity: 15},
  {product: 'Apple Watch Series 9', category: 'Smartwatches', description:"ncludes a brighter display, faster processor, and advanced health tracking features.", price: 25000, quantity: 289},
  {product: 'Sony PlayStation 5', category: 'Game Consoles', description:"Features advanced graphics, a custom SSD for fast loading times, and a range of exclusive games.", price: 88000, quantity: 315},
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productDetails = products

}
