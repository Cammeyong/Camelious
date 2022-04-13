import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, animate, stagger, style, state } from '@angular/animations'

// interface sliderImages {
//   imageSrc: string;
//   imageAlt: string;
// }


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  
  show = false

    // @Input() images: sliderImages[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 8000; //8 seconds

  

  selectedIndex = 0;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide' 
  }

  toggle() {
    this.show =!this.show;
  }

  ngOnInit(): void { 
    if(this.autoSlide) {
      this.autoSlideImages();
    }
    let checking = new IntersectionObserver(this.active);
    for(let i=0; i < this.items.length; i++){
       checking.observe(this.items[i]);
    }
  }
  items = document.getElementsByClassName('appear2');

  active(entries: any[]){
      entries.forEach(entry => {
          if(entry.isIntersecting){
          entry.target.classList.add('inview2'); 
          }else{
              entry.target.classList.remove('inview2'); 
          }
    });
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

  images = [
    {
     imageSrc: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700966840.jpg',
     imageAlt: '',
    },
    {
     imageSrc: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/02/eyemakeup-1645030692.jpg',
     imageAlt: '',
    },
    {
     imageSrc: 'https://wallpaperaccess.com/full/1190595.jpg',
     imageAlt: '',
    },{
     imageSrc: 'https://www.ebony.com/wp-content/uploads/2016/08/FrostedBeauty_original_56133-1280x800.jpg',
     imageAlt: '',
    },{
     imageSrc: 'https://wallpaperaccess.com/full/5130885.jpg',
     imageAlt: '',
    }
   ]
 
  makeupImages = [
  {
    imageSrc: 'https://n.nordstrommedia.com/id/sr3/aa69466b-d035-4434-b7f0-1345af994f2f.jpeg?h=365&w=240&dpr=2',
    imageAlt: '',
    price: '15',
  },


  {
    imageSrc: 'https://www.riteaid.com/shop/media/catalog/product/0/0/00004620000156.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=406&width=406&canvas=406:406',
    imageAlt: '',
    price: 15,
  },
  {
    imageSrc: 'https://media.allure.com/photos/5f84a35083f986fb81511fe6/master/w_1280%2Cc_limit/Maybelline%2520Hyper%2520Easy%2520Liquid%2520Eyeliner.jpg',
    imageAlt: '',
    price: 15,
  }
  ]

  jewelryImages = [
    {
      imageSrc: 'https://img.joomcdn.net/29205969f5ef52010144d811a63cefe5adf6ef67_original.jpeg?v=1590677807',
      imageAlt: 'Braided Leaf Crystal Bracelet Hand',
      price: 15,
    },
  
  
    {
      imageSrc: 'https://sc04.alicdn.com/kf/Hdf4cc2b098264f35aa568e743c645ff8v.jpg',
      imageAlt: '',
      price: 15,
    },
    {
      imageSrc: 'https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF2dTgrWGE2NkwuX0FDX1VMMTUwMF8uanBn.jpg',
      imageAlt: '',
      price: 15,
    }
    ]

  hairImages = [
    {
      imageSrc: 'https://m.media-amazon.com/images/I/61i6gwP--uL._SY355_.jpg',
      imageAlt: '',
      price: 15,
    },
    {
      imageSrc: 'https://m.media-amazon.com/images/I/81fDMx8bAOL._SL1500_.jpg',
      imageAlt: '',
      price: 15,
    },
    {
      imageSrc: 'https://m.media-amazon.com/images/I/71McWIooADL._SL1200_.jpg',
      imageAlt: '',
      price: 15,
    }
  ]
  partnersBrand = [
    {
      partnersImageSrc: 'https://image.isu.pub/210215140808-abf5ad675bd9a364c102f251e91f03be/jpg/page_1.jpg',
      partnersImageAlt: 'Fenty Beauty',
    },
    {
      partnersImageSrc: 'https://pro2-bar-s3-cdn-cf3.myportfolio.com/799d120b080897bffd1b8f4e1e73120b/46ed2f5b-38b7-4527-a7c9-6bb20a82f000_rw_1920.png?h=299c0a6a0e4e964bb031c1acc4497953',
      partnersImageAlt: 'Kylie Jenner Cosmetics',
    },
    {
      partnersImageSrc: 'https://mma.prnewswire.com/media/1551308/Tresluce_Beauty_Logo.jpg?p=facebook',
      partnersImageAlt: 'Tresluce Beauty',
    },
    {
      partnersImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoWz-AkEHRdJaVS2R_tfpsLNg6Wtt3VTwQg&usqp=CAU',
      partnersImageAlt: 'Maybelline',
    },
    {
      partnersImageSrc: 'https://image.isu.pub/210215140808-abf5ad675bd9a364c102f251e91f03be/jpg/page_1.jpg',
      partnersImageAlt: 'Fenty Beauty',
    },
    {
      partnersImageSrc: 'https://pro2-bar-s3-cdn-cf3.myportfolio.com/799d120b080897bffd1b8f4e1e73120b/46ed2f5b-38b7-4527-a7c9-6bb20a82f000_rw_1920.png?h=299c0a6a0e4e964bb031c1acc4497953',
      partnersImageAlt: 'Kylie Jenner Cosmetics',
    },
    {
      partnersImageSrc: 'https://image.isu.pub/210215140808-abf5ad675bd9a364c102f251e91f03be/jpg/page_1.jpg',
      partnersImageAlt: 'Fenty Beauty',
    }
  ]

}
