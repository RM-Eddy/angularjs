import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestakoComponent } from './testako.component';

describe('TestakoComponent', () => {
  let component: TestakoComponent;
  let fixture: ComponentFixture<TestakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestakoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
