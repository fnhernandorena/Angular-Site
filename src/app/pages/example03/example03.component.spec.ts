import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example03Component } from './example03.component';

describe('Example03Component', () => {
  let component: Example03Component;
  let fixture: ComponentFixture<Example03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Example03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
