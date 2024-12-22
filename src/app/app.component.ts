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
  activeTasks: Array<string> = [];

  // TODO: 
  // faire un enum pour les noms des app (paint etc) ou trouver mieux pour generaliser le bouton close

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
    this.paintIsShown = true;
    this.activeTasks.push("paint");
  }

  closeWindow(name: string) {
    if(name === "paint") { // TODO: remplacer par un switch case sur l'enum ?
      this.paintIsShown = false;
    }
    this.removeActiveTask(name)
  }

  removeActiveTask(name: string){
    this.activeTasks = this.activeTasks.filter((task) => task !== name);
  }
    
}
