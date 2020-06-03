import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WotldHiComponent } from './wotld-hi.component';

describe('WotldHiComponent', () => {
  let component: WotldHiComponent;
  let fixture: ComponentFixture<WotldHiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WotldHiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WotldHiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
