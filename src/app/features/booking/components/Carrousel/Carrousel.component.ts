import { Component, input } from '@angular/core';

@Component({
  selector: 'carrousel',
  imports: [],
  templateUrl: './Carrousel.component.html',
})
export class CarrouselComponent {

  imagePoster = input<string>();
  widthPoster = input<number>(260);
  showButtonViewMore = input<boolean>(true);


}
