import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumersTableComponent } from './custumers-table.component';

describe('CustumersTableComponent', () => {
  let component: CustumersTableComponent;
  let fixture: ComponentFixture<CustumersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustumersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
