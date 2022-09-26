import { ImgBrokenDirective } from './img-broken.directive';
import { ElementRef } from '@angular/core';

//La prueba de ImgBroken es la siguiente
describe('ImgBrokenDirective', () => {

  //Todo deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

});
