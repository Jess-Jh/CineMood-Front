import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTheaterManagersPageComponent } from './manage-theater-managers-page.component';

describe('ManageTheaterManagersPageComponent', () => {
  let component: ManageTheaterManagersPageComponent;
  let fixture: ComponentFixture<ManageTheaterManagersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTheaterManagersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTheaterManagersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
