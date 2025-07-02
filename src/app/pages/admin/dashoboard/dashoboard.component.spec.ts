import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoboardComponent } from './dashoboard.component';

describe('DashoboardComponent', () => {
  let component: DashoboardComponent;
  let fixture: ComponentFixture<DashoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashoboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
