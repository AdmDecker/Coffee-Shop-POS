import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagelCustomizeComponent } from './bagel-customize.component';

describe('BagelCustomizeComponent', () => {
  let component: BagelCustomizeComponent;
  let fixture: ComponentFixture<BagelCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagelCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagelCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
