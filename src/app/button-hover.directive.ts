import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective {

  constructor() { 

  }

  @Input()
  value;

  @HostListener('mouseover')
  public onMouseOver(){
    this.color = 'hotpink';
  }

  @HostListener('mouseleave')
  public onMouseLeave(){
    this.color = null;
  }

  @HostBinding('style.backgroundColor')
  public color = null;

}
