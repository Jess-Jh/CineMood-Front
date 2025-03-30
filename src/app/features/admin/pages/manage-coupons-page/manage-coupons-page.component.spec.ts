import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCouponsPageComponent } from './manage-coupons-page.component';

describe('ManageCouponsPageComponent', () => {
  let component: ManageCouponsPageComponent;
  let fixture: ComponentFixture<ManageCouponsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCouponsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCouponsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
