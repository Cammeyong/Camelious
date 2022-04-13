import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, animate, stagger, style, state } from '@angular/animations'



interface makeupImages {
  imageSrc: string;
  imageAlt: string;
  price: any;
}

interface jewelryImages {
  imageSrc: string;
  imageAlt: string;
  price: any;
}

interface hairImages {
  imageSrc: string;
  imageAlt: string;
  price: any;
}

@Component({
  selector: 'app-top-selection',
  templateUrl: './top-selection.component.html',
  styleUrls: ['./top-selection.component.css'],
  animations: [
    trigger('home', [
      state('show', style({
        opacity: 1
      })),
      state('show', style({
        opacity: 1
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class TopSelectionComponent implements OnInit {

  show = false

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide' 
  }

  toggle() {
    this.show =!this.show;
  }


 @Input() makeupImages: makeupImages[] = []
 @Input() jewelryImages: jewelryImages[] = [] 
 @Input() hairImages: hairImages[] = []
 

  ngOnInit(): void {
    
  }

}
