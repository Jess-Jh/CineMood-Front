import { Component } from '@angular/core';
import { DropdownButtonComponent } from "../../../../shared/dropdown-button/dropdown-button.component";
import { CarrouselComponent } from "../../components/Carrousel/Carrousel.component";

@Component({
  selector: 'app-billboard-page',
  imports: [DropdownButtonComponent, CarrouselComponent],
  templateUrl: './billboard-page.component.html',
})
export class BillboardPageComponent { }
