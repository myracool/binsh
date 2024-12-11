import {Component, EventEmitter, Output} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'start',
  imports: [CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  shouldShowMenu: boolean = false;
  @Output() menuEvent = new EventEmitter<boolean>();

  toggleMenu() {
    this.shouldShowMenu = !this.shouldShowMenu;
    this.menuEvent.emit(this.shouldShowMenu);
  }
}
