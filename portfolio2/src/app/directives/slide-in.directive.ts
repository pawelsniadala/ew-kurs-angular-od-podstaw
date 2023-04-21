import {
  Directive,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appSlideIn]',
  // host: {
  //   '[class.animate]': 'animate'
  // }
})

export class SlideInDirective {
  @Input('appSlideIn') @HostBinding('class') direction: string = 'left';

  @HostBinding('class.slideIn') slideIn: boolean = true;

  @HostBinding('class.animate') animate: boolean = false;

  @Input() delay: number = 1000;

  handler: any;

  constructor() {}

  ngOnInit(): void {
    this.handler = setTimeout(() => {
      this.animate = true
    }, this.delay);
  }

  ngOnDestroy(): void {
    clearTimeout(this.handler)
  }
}
