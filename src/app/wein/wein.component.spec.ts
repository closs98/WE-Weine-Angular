import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeinComponent } from './wein.component';

describe('WeinComponent', () => {
  let component: WeinComponent;
  let fixture: ComponentFixture<WeinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
