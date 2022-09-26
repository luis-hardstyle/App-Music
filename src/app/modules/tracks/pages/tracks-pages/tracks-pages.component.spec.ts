import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksPagesComponent } from './tracks-pages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TracksPagesComponent', () => {
  let component: TracksPagesComponent;
  let fixture: ComponentFixture<TracksPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ TracksPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
