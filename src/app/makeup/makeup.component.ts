import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { cartItems } from '../interfaces'

interface makeUpImages {
  ImageSrc: string;
  ImageAlt: string;
  name: string;
  price: number;
}

interface lipStickImages {
  ImageSrc: string;
  ImageAlt: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {

  public searchKey:any = "" ;
  productList: any;



  public makeUpImages:cartItems[] = [];
  public lipStickImages:cartItems[] = [];

  @Input() images: makeUpImages[] = []
  @Input() lipStickImage: lipStickImages[] = []

  constructor(private cartService:CartService) { }

  public searchTerm : any = '';

  ngOnInit(): void {

    this.getMakeUp();
    this.getLipstick();


    this.makeUpImages.forEach((a: any) => {  //utilize the for each loop to assign an object with a quatity of 1 and tota
        Object.assign(a, {quantity: 1, total:a.price});
      });
    // });

    this.cartService.search.subscribe((val: any)=>{ 
      this.searchKey = val;
    })
  }

  addtocart(item: any) { //we are passing a parameter as item which we get from the products page
    this.cartService.addtoCart(item);
  }
  getMakeUp(): void {
    this.makeUpImages = this.cartService.getMakeUp();
  }

  getLipstick(): void {
    this.lipStickImages = this.cartService.getLipstick();
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm); 
  }
}
