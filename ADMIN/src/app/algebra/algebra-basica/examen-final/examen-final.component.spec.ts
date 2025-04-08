import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenFinalComponent } from './examen-final.component';

describe('ExamenFinalComponent', () => {
  let component: ExamenFinalComponent;
  let fixture: ComponentFixture<ExamenFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamenFinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
