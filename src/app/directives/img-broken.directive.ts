import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() errorImage: string = '';
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    // console.log('Este imagen revento', this.elHost)
    elNative.src = this.errorImage
  }

  constructor(private elHost: ElementRef) {
   }

}
