import { Component, signal } from '@angular/core';
import { DropdownButtonComponent } from "../../../../shared/dropdown-button/dropdown-button.component";
import { CarrouselComponent } from "../../components/Carrousel/Carrousel.component";
import { GenericModel } from '../../interfaces/generic-model.interface';

@Component({
  selector: 'app-billboard-page',
  imports: [DropdownButtonComponent, CarrouselComponent],
  templateUrl: './billboard-page.component.html',
})
export class BillboardPageComponent {

  citySelected = signal<GenericModel>({ label: 'Selecciona una ciudad', id: 0 });
  typeMovieSelected = signal<GenericModel>({ label: 'Selecciona un género', id: 0 });

  widthPosterBillboard: number = 480;
  widthPosterPresale: number = 220;
  showButtonViewMore: boolean = false;

  private _cities = [
    { label: 'New York', id: 1 },
    { label: 'Los Angeles', id: 2 },
    { label: 'Chicago', id: 3 },
    { label: 'Houston', id: 4 },
    { label: 'Phoenix', id: 5 },
    { label: 'Philadelphia', id: 6 },
    { label: 'San Antonio', id: 7 },
    { label: 'San Diego', id: 8 },
    { label: 'Dallas', id: 9 },
    { label: 'San Jose', id: 10 },
    { label: 'Austin', id: 11 },
    { label: 'Columbus', id: 14 },
    { label: 'San Francisco', id: 16 },
    { label: 'Seattle', id: 18 },
    { label: 'Denver', id: 19 },
    { label: 'Washington', id: 20 },
    { label: 'Boston', id: 21 },
    { label: 'Detroit', id: 23 },
    { label: 'Nashville', id: 24 },
    { label: 'Baltimore', id: 25 },
    { label: 'Oklahoma City', id: 26 },
  ];

  private _typesMovies = [
    { label: 'Acción', id: 1 },
    { label: 'Aventura', id: 2 },
    { label: 'Ciencia Ficción', id: 3 },
    { label: 'Comedia', id: 4 },
    { label: 'Drama', id: 5 },
    { label: 'Terror', id: 6 },
    { label: 'Romance', id: 7 },
    { label: 'Documental', id: 8 },
    { label: 'Animación', id: 9 },
    { label: 'Musical', id: 10 },
    { label: 'Fantasía', id: 11 },
    { label: 'Thriller', id: 12 },
    { label: 'Misterio', id: 13 },
    { label: 'Biografía', id: 14 },
    { label: 'Western', id: 15 },
    { label: 'Guerra', id: 16 },
    { label: 'Deporte', id: 17 },
  ];

  get cities() {
    return [...this._cities];
  }

  get typesMovies() {
    return [...this._typesMovies];
  }

  selectCity(selected: GenericModel) {
    this.citySelected.set(selected);
  }

  selectTypeMovie(selected: GenericModel) {
    this.typeMovieSelected.set(selected);
  }
}
