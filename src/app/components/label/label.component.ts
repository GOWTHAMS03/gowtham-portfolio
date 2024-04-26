import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.headerAnimation();
  }

  headerAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.header__marq-wrapp', {
      scrollTrigger: {
        trigger: 'header',
        start: 'bottom top',
        scrub: 1.9
      },
      xPercent: -200 // Adjust this value as needed for desired movement
    });
  }
}
