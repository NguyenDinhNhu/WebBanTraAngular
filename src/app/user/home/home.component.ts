import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  slidesSlider: any[] = [];
  slidesHotProducts = [
    { img: '../assets/Pictures/trang-chu/product-1.png' },
    { img: '../assets/Pictures/trang-chu/product-2.png' },
    { img: '../assets/Pictures/trang-chu/product-3.png' },
    { img: '../assets/Pictures/trang-chu/product-4.png' },
    { img: '../assets/Pictures/trang-chu/product-4.png' },
  ];

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor(private ps: HomeService){}

  getAll(){
    this.ps.getListSlider().subscribe(res => {
      res.list.filter((x: any) => this.slidesSlider.push(x));
    });
  }

  ngOnInit(){
    this.getAll();
  }
}
