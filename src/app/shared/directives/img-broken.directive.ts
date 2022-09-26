import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleWrror(): void {
    const elNativo = this.elHOst.nativeElement
    console.log('Esta imagen Revento -->', this.elHOst)
    elNativo.src = "https://i.ibb.co/SwRqNhm/3819552.jpg" 
  }


  constructor(private elHOst: ElementRef) {

   }

}
