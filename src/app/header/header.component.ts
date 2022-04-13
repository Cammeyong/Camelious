import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;


  constructor(private cartService:CartService) {
    this.cartService.getProducts() //call this method once the page is initialized
    .subscribe(res=>{ //we subscribe to get a response and in the event of a response we want to try to store that and update it to the view using interpolation
      this.totalItem = res.length;
    })
   }

  ngOnInit(): void {
  }

}
