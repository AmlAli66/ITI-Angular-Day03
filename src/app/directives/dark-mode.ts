import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkMode]',
})
export class DarkMode {
  constructor(private renderer: Renderer2) { }

  @HostListener('click')
  toggleMode() {
    this.renderer.addClass(document.body, 'test');
    document.body.classList.toggle('dark-mode');
  }
}
