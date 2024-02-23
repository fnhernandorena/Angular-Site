import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example04Component } from './example04.component';

describe('Example04Component', () => {
  let component: Example04Component;
  let fixture: ComponentFixture<Example04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Example04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
