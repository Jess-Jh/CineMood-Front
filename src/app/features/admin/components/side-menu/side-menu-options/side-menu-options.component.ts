import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Películas',
      subLabel: 'Administrar películas',
      route: '/dashboard-admin/movies',
    },
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Teatros',
      subLabel: 'Administrar teatros',
      route: '/dashboard-admin/theaters',
    },

  ]

}
