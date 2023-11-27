import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputCounterComponent } from './custom-input-counter.component';

describe('CustomInputCounterComponent', () => {
  let component: CustomInputCounterComponent;
  let fixture: ComponentFixture<CustomInputCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInputCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
