import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example02Component } from './example02.component';

describe('Examples02Component', () => {
  let component: Example02Component;
  let fixture: ComponentFixture<Example02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Example02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
