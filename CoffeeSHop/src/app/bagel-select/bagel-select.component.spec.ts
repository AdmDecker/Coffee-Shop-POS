import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagelSelectComponent } from './bagel-select.component';

describe('BagelSelectComponent', () => {
  let component: BagelSelectComponent;
  let fixture: ComponentFixture<BagelSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
