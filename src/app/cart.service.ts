import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItems } from './interfaces';
import { necklaceImages, ringImages, makeUpImages, lipStickImages, hairImages } from './cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public search = new BehaviorSubject<any>(''); //will act as an emittor and an observable and what it will check for value being passed to the search and send that to teh products List

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]); //behaviour subject can emit data nd act as an observable () have data passed to it and also subscibe). here it is initialing product list as an array
  // search: any;

  constructor() {} 

  getProducts() {
    return this.productList.asObservable(); //the return allows them to get whatever data is captured there in the function. any who uses this can subscribe to it
  }

  //the tutorial says the setProductmethod is optional but i will keep it and test it later
  setProduct(product: any) {
    this.cartItemList.push(...product); //push whatever is in it to the CartItemList array
    this.productList.next(product) //emits the data so that it will be passed where eer it has been subscribed
  }

  addtoCart(product : any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList); //when it is being pushed to cartlistitem it will also be passed where it is being subscribed or to where ever the product list is being subscribed
    this.getTotalPrice(); //will call the total price of the item or the total price of theh cartitemlist which ever we are having
    console.log(this.cartItemList);
  }

  getTotalPrice() : number { //will total all teh items in the cart
    let grandTotal = 0;
    this.cartItemList.map((a:any)=> { //this will take everything inside the cartItemList array
      grandTotal += a.total; //the logic is the grandtotal which is set to zero will be added and incremented to whatever is passed in the map as 'a' with a data type as any
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    // this.cartItemList.map(() => { //research map() method this method and get method
    //   if(product) { //here the condition is if the item  is the same as the item being removed then remove it from the index in the array
    //     this.cartItemList.splice(this.cartItemList.indexOf(product),1)
    //   }
    // })
    if(product){ // code above adjusted to this to slice items by index of 1
        this.cartItemList.splice(this.cartItemList.indexOf(product), 1);
    }
    this.productList.next(this.cartItemList); //to update the cart item grandtotal as we remove items
  }

  removeAllCart() {
    this.cartItemList = []; //this is how we empty an array by resetting it to an empty array
    this.productList.next(this.cartItemList); //we add this because it has been subscribed and we want to pass the new data which is the empty array back to where it had been subscribed
  }

  getNecklaces():cartItems[] {
    return necklaceImages;
  }

  getRings():cartItems[] {
    return ringImages;
  }

  getMakeUp():cartItems[] {
    return makeUpImages;
  }
  
  getLipstick():cartItems[] {
    return lipStickImages;
  }

  getHair():cartItems[] {
    return hairImages;
  }
}
