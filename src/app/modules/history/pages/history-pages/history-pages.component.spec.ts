import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPagesComponent } from './history-pages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HistoryPagesComponent', () => {
  let component: HistoryPagesComponent;
  let fixture: ComponentFixture<HistoryPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ HistoryPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
