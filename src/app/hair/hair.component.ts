import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { cartItems } from '../interfaces';

interface hairImages {
  ImageSrc: string;
  ImageAlt: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {

  public searchKey:any = "" ;
  productList: any;
  

  public hairImages:cartItems[] = [];

  @Input() images: hairImages[] = []

  constructor(private cartService:CartService) { }
  public searchTerm : any = '';

  ngOnInit(): void {
    this.gethairImages();

    this.hairImages.forEach((a: any) => {  //utilize the for each loop to assign an object with a quatity of 1 and tota
      Object.assign(a, {quantity: 1, total:a.price});
    });

    this.cartService.search.subscribe((val: any)=>{ //here it is acting like an observable and will help to return the value being search it is recieving the value frm the header component
      this.searchKey = val;
    })
  }

  addtocart(item: any) { //we are passing a parameter as item which we get from the products page
    this.cartService.addtoCart(item);
  }
    
  gethairImages(): void {
    this.hairImages = this.cartService.getHair();
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value; //this is checking for the term bound to it on the keyup event
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm); //connected to teh behaviour subject in the service ts and is emitting the value being passed this value will be used inside the products component ts which wil be listening for it
  }
 

}
