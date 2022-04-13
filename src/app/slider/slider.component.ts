import { Component, Input, OnInit } from '@angular/core';

interface sliderImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  @Input() images: sliderImages[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 8000; //8 seconds


  selectedIndex = 0;


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
  // sets index of image on circle/indicator click
  selectImage(index: number): void {
   this.selectedIndex = index;
  }

  onPreviousClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
