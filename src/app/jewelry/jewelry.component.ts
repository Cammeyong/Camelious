import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { cartItems } from '../interfaces';

interface necklaceImages {
  ImageSrc: string;
  ImageAlt: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent implements OnInit {


  public necklaceImages:cartItems[] = []; //we store all items coming from the api to this productlist variable
  public ringImages:cartItems[] = []; 


  // search = '';
  // name = '';
  public searchKey:any = "" ;

  @Input() images: necklaceImages[] = []
  productList: any;


  constructor(private cartService : CartService) { }

  public searchTerm : any = ''; //declared property type of search here to calm typescript

  ngOnInit(): void {

    this.getNecklace();
    this.getRings();

    // this.api.getProduct().subscribe(res=>{
    //   this.productList = res; //making the call to get the data from the api when the page is initailzed

    this.necklaceImages.forEach((a: any) => {  //utilize the for each loop to assign an object with a quatity of 1 and tota
        Object.assign(a, {quantity: 1, total:a.price});
      });
    // });

    this.cartService.search.subscribe((val: any)=>{ //here it is acting like an observable and will help to return the value being search it is recieving the value frm the header component
      this.searchKey = val;
    })
  
  }

  
  addtocart(item: any) { //we are passing a parameter as item which we get from the products page
    this.cartService.addtoCart(item);
  }

  getNecklace(): void {
    this.necklaceImages = this.cartService.getNecklaces(); 
  }

  getRings(): void {
    this.ringImages = this.cartService.getRings(); 
  }

  // onNameFilter() {
  //   this.search = this.name;
  // }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value; //this is checking for the term bound to it on the keyup event
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm); //connected to teh behaviour subject in the service ts and is emitting the value being passed this value will be used inside the products component ts which wil be listening for it
  }

  
}
