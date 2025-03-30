import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTheatersPageComponent } from './manage-theaters-page.component';

describe('ManageTheatersPageComponent', () => {
  let component: ManageTheatersPageComponent;
  let fixture: ComponentFixture<ManageTheatersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTheatersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTheatersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
