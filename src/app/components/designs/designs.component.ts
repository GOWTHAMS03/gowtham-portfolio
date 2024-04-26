import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DevelopmentComponent } from "../development/development.component";

@Component({
    selector: 'app-designs',
    standalone: true,
    templateUrl: './designs.component.html',
    styleUrl: './designs.component.css',
    imports: [DevelopmentComponent]
})
export class DesignsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const showDemo = () => {
      document.body.style.overflow = "auto";
      (document.scrollingElement as HTMLElement).scrollTo(0, 0);
      gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });
      Array.from(document.querySelectorAll("section")).forEach(
        (section: HTMLElement, index: number) => {
          const w = section.querySelector(".wrapper");
          if (w) {
            const [x, xEnd] =
              index % 2
                ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
                : [w.scrollWidth * -1, 0];
            gsap.fromTo(
              w,
              { x },
              {
                x: xEnd,
                scrollTrigger: {
                  trigger: section,
                  scrub: 0.5
                }
              }
            );
          }
        }
      );
    };

    // Call showDemo directly
    showDemo();
  }
}