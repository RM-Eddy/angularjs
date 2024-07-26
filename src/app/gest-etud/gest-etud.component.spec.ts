import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestEtudComponent } from './gest-etud.component';

describe('GestEtudComponent', () => {
  let component: GestEtudComponent;
  let fixture: ComponentFixture<GestEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestEtudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
