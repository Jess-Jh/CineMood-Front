import { CommonModule } from '@angular/common';
import { Component, Host, HostListener, signal } from '@angular/core';

@Component({
  selector: 'dropdown-button',
  imports: [CommonModule],
  templateUrl: './dropdown-button.component.html',
})
export class DropdownButtonComponent {

  private _cities = [
    { name: 'New York', id: 1 },
    { name: 'Los Angeles', id: 2 },
    { name: 'Chicago', id: 3 },
    { name: 'Houston', id: 4 },
    { name: 'Phoenix', id: 5 },
    { name: 'Philadelphia', id: 6 },
    { name: 'San Antonio', id: 7 },
    { name: 'San Diego', id: 8 },
    { name: 'Dallas', id: 9 },
    { name: 'San Jose', id: 10 },
    { name: 'Austin', id: 11 },
    { name: 'Columbus', id: 14 },
    { name: 'San Francisco', id: 16 },
    { name: 'Seattle', id: 18 },
    { name: 'Denver', id: 19 },
    { name: 'Washington', id: 20 },
    { name: 'Boston', id: 21 },
    { name: 'Detroit', id: 23 },
    { name: 'Nashville', id: 24 },
    { name: 'Baltimore', id: 25 },
    { name: 'Oklahoma City', id: 26 },];

  get cities() {
    return [...this._cities];
  }

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isDropdownOpen = false;
    }
  }
}
