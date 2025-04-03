import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Host, HostListener, input, Output, output, signal } from '@angular/core';
import type { GenericModel } from '../../features/booking/interfaces/generic-model.interface';

@Component({
  selector: 'dropdown-button',
  imports: [CommonModule],
  templateUrl: './dropdown-button.component.html',
})
export class DropdownButtonComponent {

  selected = input.required<GenericModel>();
  listElements = input.required<GenericModel[]>();
  itemSelected = output<GenericModel>();

  isDropdownOpen: boolean = false;

  onSelect(item: GenericModel) {
    this.itemSelected.emit(item);
    this.isDropdownOpen = false;
  }

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
