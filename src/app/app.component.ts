import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StartComponent} from './start/start.component';
import {PaintComponent} from './paint/paint.component';
import {MenuComponent} from './menu/menu.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, StartComponent, MenuComponent, PaintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binsh';
  menuIsShown: boolean = false;
  paintIsShown: boolean = false;

  @HostListener('document:click', ['$event', '$event.target'])
  documentClick(event: MouseEvent, targetElement: HTMLElement) {
    if (targetElement.className !== "start-button") {
      this.menuIsShown = false;
    }
  }

  showMenu() {
    this.menuIsShown = !this.menuIsShown;
  }

  showPaint() {
    this.paintIsShown = !this.paintIsShown;
  }
}
