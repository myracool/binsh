import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'paint',
  imports: [CommonModule,CdkDrag],
  templateUrl: './paint.component.html',
  styleUrl: './paint.component.css'
})
export class PaintComponent {

}
