import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-whatido',
  standalone: true,
  imports: [],
  templateUrl: './whatido.component.html',
  styleUrl: './whatido.component.css'
})
export class WhatidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    this.servAnimation();
  }

  servAnimation(): void {
    gsap.from('.serv__item-arrow', {
      x: (i: number, el: HTMLElement) => (1 - parseFloat(el.getAttribute('data-speed') as string)), // Type assertion added
      scrollTrigger: {
        trigger: '.serv__list',
        start: 'top bottom',
        scrub: 1.9
      }
    });
  }
}
