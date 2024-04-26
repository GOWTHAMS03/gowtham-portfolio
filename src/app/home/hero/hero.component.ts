import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setInterval(() => this.changeFontFamily(), 1000);
    this.animateCircle();
    // this.adjustImageSize(); // Call the function to adjust image size initially
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.adjustImageSize(); // Call the function to adjust image size on window resize
  // }

  // adjustImageSize() {
  //   const windowWidth = window.innerWidth;
  //   const imgElement = document.getElementById('main-img');
  //   if (imgElement) {
     
  //     if (windowWidth < 640) {
  //       this.renderer.setStyle(imgElement, 'width', '100%');
  //     } else {
  //       this.renderer.setStyle(imgElement, 'width', '80%');
  //     }
  //   }
  // }

  fontFamilies: string[] = ['Arial', 'Antom', 'Courier New, monospace'];
  currentIndex: number = 0;
  currentFontFamily: string = this.fontFamilies[0];

  changeFontFamily() {
    this.currentIndex = (this.currentIndex + 1) % this.fontFamilies.length;
    this.currentFontFamily = this.fontFamilies[this.currentIndex];
  }

  animateCircle() {
    gsap.to('.circle', { top: '50px', duration: 1, ease: 'power2.inOut', repeat: -1, yoyo: true });
  }
}
