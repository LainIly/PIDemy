import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolinomiosComponent } from './polinomios.component';

describe('PolinomiosComponent', () => {
  let component: PolinomiosComponent;
  let fixture: ComponentFixture<PolinomiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolinomiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolinomiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
