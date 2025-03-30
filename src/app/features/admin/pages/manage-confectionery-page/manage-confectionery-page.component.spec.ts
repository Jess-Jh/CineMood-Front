import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConfectioneryPageComponent } from './manage-confectionery-page.component';

describe('ManageConfectioneryPageComponent', () => {
  let component: ManageConfectioneryPageComponent;
  let fixture: ComponentFixture<ManageConfectioneryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageConfectioneryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageConfectioneryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
