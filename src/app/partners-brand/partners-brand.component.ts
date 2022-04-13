import { Component, Input, OnInit } from '@angular/core';

interface partnerImages {
  partnersImageSrc: string;
  partnersImageAlt: string;
}

@Component({
  selector: 'app-partners-brand',
  templateUrl: './partners-brand.component.html',
  styleUrls: ['./partners-brand.component.css']
})
export class PartnersBrandComponent implements OnInit {

  @Input() partnersBrand: partnerImages[] = []
  @Input() autoSlide = false;
  @Input() slideInterval = 8000; //8 seconds
  @Input() controls = true;

  selectedIndex = 0;
  // onNextClick: any;


  ngOnInit(): void { 
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }

  //change slide every 8 seconds
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  onPreviousClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.partnersBrand.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.partnersBrand.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  constructor() { }


}
