import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutsComponent } from './public-layouts.component';

describe('PublicLayoutsComponent', () => {
  let component: PublicLayoutsComponent;
  let fixture: ComponentFixture<PublicLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicLayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
