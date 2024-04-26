import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-customecursor',
  standalone: true,
  imports: [],
  templateUrl: './customecursor.component.html',
  styleUrl: './customecursor.component.css'
})
export class CustomecursorComponent {
  cursor!: HTMLElement;
  cursorinner!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.cursor = document.querySelector('.cursor') as HTMLElement;
    this.cursorinner = document.querySelector('.cursor2') as HTMLElement;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const x = e.clientX;
    const y = e.clientY;
    this.cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    this.cursorinner.style.left = x + 'px';
    this.cursorinner.style.top = y + 'px';
  }

  @HostListener('document:mousedown')
  onMouseDown(): void {
    this.cursor.classList.add('click');
    this.cursorinner.classList.add('cursorinnerhover');
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.cursor.classList.remove('click');
    this.cursorinner.classList.remove('cursorinnerhover');
  }

  onMouseOver(): void {
    this.cursor.classList.add('hover');
  }

  onMouseLeave(): void {
    this.cursor.classList.remove('hover');
  }
}