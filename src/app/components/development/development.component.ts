import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-development',
  standalone: true,
  imports: [],
  templateUrl: './development.component.html',
  styleUrl: './development.component.css'
})
export class DevelopmentComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.portfolio();
  }

  portfolio(): void {
    gsap.from('.work__item, .work__item-num', {
      y: (i: number, el: HTMLElement) => {
        const speedAttr = el.getAttribute('data-speed');
        return speedAttr ? (1 - parseFloat(speedAttr)) : 0;
      },
      scrollTrigger: {
        trigger: '.work',
        start: 'top bottom',
        scrub: 1.9
      }
    });

    gsap.from('.work__item-img img', {
      scale: 1.6,
      scrollTrigger: {
        trigger: '.work__wrapp',
        start: 'top bottom',
        scrub: 1.9
      }
    });
  }

}