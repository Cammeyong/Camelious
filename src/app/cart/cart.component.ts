import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];//creating a property to store what is being retrieved from the get product method
  public grandTotal : number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    // if(item){
    //   this.products.splice(this.products.indexOf(item), 1);
    //   this.grandTotal -= this.products.price;
    //   // this.quantity -= 1;
  
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

}
