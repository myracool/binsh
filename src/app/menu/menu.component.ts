import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaintComponent} from '../paint/paint.component';

@Component({
  selector: 'menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  shouldShowPaint: boolean = false;
  @Output() paintEvent = new EventEmitter<boolean>();

  togglePaint() {
    console.log("toto")
    this.shouldShowPaint = !this.shouldShowPaint;
    this.paintEvent.emit(this.shouldShowPaint);
  }
}
