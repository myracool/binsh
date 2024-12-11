import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() tasks : Array<string> = [];

  toggleMenu() {
    this.shouldShowMenu = !this.shouldShowMenu;
    this.menuEvent.emit(this.shouldShowMenu);
  }
}
