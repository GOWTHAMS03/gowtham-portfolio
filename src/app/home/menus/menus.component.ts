import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TweenMax, Power4 } from 'gsap';
import { MusicService } from '../../services/music.service'
import { HeroComponent } from "../hero/hero.component";

@Component({
    selector: 'app-menus',
    standalone: true,
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.css'],
    imports: [HeroComponent]
})
export class MenusComponent implements AfterViewInit {
  isMusicPlaying: boolean = true;
  private audio: HTMLAudioElement = new Audio('../../assets/music.mp3');
  useCustomFont: any;
  isHovered: boolean = false;
  isSoundButtonStyled: boolean = false; // Add a boolean variable to track whether the sound button is styled or not

  @ViewChildren('magnetic') magnets!: QueryList<ElementRef>;
 

  strength = 50;

  constructor(private musicService: MusicService) {
    this.musicService.getMusicState().subscribe((state) => {
      this.isMusicPlaying = state;
      this.updateAudio();
      this.toggleSwipeAnimation();
    });
  }

  toggleMusic() {
    this.musicService.toggleMusic();
    this.isSoundButtonStyled = !this.isSoundButtonStyled; // Toggle the boolean variable to track styling state
  }

  ngAfterViewInit() {
    this.audio.loop = true;
    this.updateAudio();
    this.initMagnets();
  }

  updateAudio() {
    if (this.isMusicPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  toggleSwipeAnimation() {
    const swipeWord = document.querySelector('.swipe-word');
    if (swipeWord) {
      swipeWord.classList.toggle('slide-out');
      swipeWord.classList.toggle('slide-in');
    }
  }

  initMagnets() {
    this.magnets.forEach((magnet) => {
      magnet.nativeElement.addEventListener('mousemove', this.moveMagnet.bind(this));
      magnet.nativeElement.addEventListener('mouseout', (event: MouseEvent) => {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
      });
    });
  }

  moveMagnet(event: MouseEvent) {
    const magnetButton = event.currentTarget as HTMLElement;
    const bounding = magnetButton.getBoundingClientRect();

    TweenMax.to(magnetButton, 1, {
      x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * this.strength,
      y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * this.strength,
      ease: Power4.easeOut
    });
  }
}
