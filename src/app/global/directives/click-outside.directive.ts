import { ElementRef, Output, EventEmitter, HostListener, Input, Directive } from '@angular/core';

@Directive({
  selector: '[app-clickOutside]',
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter();

  @Input() enableContextClick: boolean;
  @Input() element: HTMLElement;

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      if (this.element && (this.element === targetElement || this.element.contains(targetElement)))
        return;
      this.clickOutside.emit();
    }
  }

  @HostListener('document:contextmenu', ['$event.target'])
  public onRightClick(targetElement) {
    if (this.enableContextClick) {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit();
      }
    }
  }
}
