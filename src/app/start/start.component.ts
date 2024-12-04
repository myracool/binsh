import {Component} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'start',
  imports: [MenuComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
