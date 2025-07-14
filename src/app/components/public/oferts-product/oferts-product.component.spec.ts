import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertsProductComponent } from './oferts-product.component';

describe('OfertsProductComponent', () => {
  let component: OfertsProductComponent;
  let fixture: ComponentFixture<OfertsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertsProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
