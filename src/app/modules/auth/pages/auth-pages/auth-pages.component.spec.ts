import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPagesComponent } from './auth-pages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AuthPagesComponent', () => {
  let component: AuthPagesComponent;
  let fixture: ComponentFixture<AuthPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ AuthPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('Deberia de retornar invalido el formulario', () => {
    //debe de asegurarse que el formulario sea invalido cuando ingrese dato erroneo
  //Patron AAA(Arrange Act, Assert)

  //Arrange
  const mockCredentials = {
    email: '0x0x0x0x0x0x0x',
    password: '1111111111111111111111111111111111'

  }
  const emailForm: any = component.formLogin.get('email');
  const passwordForm: any = component.formLogin.get('password');

  //Act
  emailForm.setValue(mockCredentials.email)
  passwordForm.setValue(mockCredentials.password);

  //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('Deberia de retornar valido el formulario', () => {
  //Arrange
  const mockCredentials = {
    email: 'test@test.com',
    password: '12345678'

  }
  const emailForm: any = component.formLogin.get('email');
  const passwordForm: any = component.formLogin.get('password');

  //Act
  emailForm.setValue(mockCredentials.email)
  passwordForm.setValue(mockCredentials.password);

  //Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('EL boton deberia tener la palabra "Iniciar session"',() => {
    const ElementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = ElementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')

  });
});
