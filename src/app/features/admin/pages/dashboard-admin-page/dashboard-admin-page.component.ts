import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'dashboard-admin-page',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-admin-page.component.html',
  styleUrl: './dashboard-admin-page.component.css'
})
export default class DashboardAdminPageComponent {

}
