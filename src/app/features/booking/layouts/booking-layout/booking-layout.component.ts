import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'booking-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './booking-layout.component.html',
})
export class BookingLayoutComponent {



}
