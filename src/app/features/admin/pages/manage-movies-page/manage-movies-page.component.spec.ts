import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMoviesPageComponent } from './manage-movies-page.component';

describe('ManageMoviesPageComponent', () => {
  let component: ManageMoviesPageComponent;
  let fixture: ComponentFixture<ManageMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMoviesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
