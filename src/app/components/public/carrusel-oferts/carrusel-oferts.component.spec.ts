import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselOfertsComponent } from './carrusel-oferts.component';

describe('CarruselOfertsComponent', () => {
  let component: CarruselOfertsComponent;
  let fixture: ComponentFixture<CarruselOfertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselOfertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselOfertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
