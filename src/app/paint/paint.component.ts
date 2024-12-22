import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'paint',
  imports: [CommonModule,CdkDrag],
  templateUrl: './paint.component.html',
  styleUrl: './paint.component.css'
})
export class PaintComponent {
  @Output() paintClosed = new EventEmitter<boolean>();
  image_folder:string = "/assets/memes/";
  memes_size:number = 2;

  close() {
    this.paintClosed.emit(false);
  }

  getMeme(){
  let meme_num = Math.floor(Math.random() * this.memes_size) + 1;
  return `${this.image_folder}${meme_num}.jpeg`;
  }
}
