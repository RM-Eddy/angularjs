import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAjoutComponent } from './test-ajout.component';

describe('TestAjoutComponent', () => {
  let component: TestAjoutComponent;
  let fixture: ComponentFixture<TestAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAjoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
