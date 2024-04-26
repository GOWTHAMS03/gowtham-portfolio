import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const bodyScrollBar = Scrollbar.init(document.querySelector('.about-container')!, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    ScrollTrigger.scrollerProxy(".about-container", {
      scrollTop(value?: number): number {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value!;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({
      scroller: ".about-container",
    });

    gsap.to(".text span", { 
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".text span",
        scrub: 1,
        start: "top center",
        end: "bottom top",
      },
    });
  }
}