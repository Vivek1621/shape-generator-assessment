import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-shape',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
})
export class ShapeComponent {
  @Input() shape: any;
  types: string[] = ["fizz", "buzz", "fizzbuzz"];

  isSquare() {
    return this.shape.type === 'fizz' || this.shape.type === 'fizzbuzz';
  }

  isCircle() {
    return this.shape.type === 'buzz' || this.shape.type === 'idk';
  }

  getColor() {
    return this.shape.number < 0 && this.types.includes(this.shape.type) ? 'blue' :
      this.shape.number > 0 && this.types.includes(this.shape.type) ? 'red' : 'yellow';
  }

  getBorderRadius() {
    return this.shape.type === 'fizzbuzz' ? `${this.shape.number}px` : '0';
  }

}
