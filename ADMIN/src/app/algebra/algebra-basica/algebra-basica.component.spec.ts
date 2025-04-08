import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraBasicaComponent } from './algebra-basica.component';

describe('AlgebraBasicaComponent', () => {
  let component: AlgebraBasicaComponent;
  let fixture: ComponentFixture<AlgebraBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgebraBasicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgebraBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
