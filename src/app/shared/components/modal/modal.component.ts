import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapeService } from '../../../core/services/shape.service';
import { ObjectInArray } from '../../../core/services/shape.service';
import { ShapeComponent } from '../shape/shape.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ShapeComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  shapes: ObjectInArray[] = [];

  constructor( public activeModal: NgbActiveModal, private shapeService: ShapeService) {
    this.shapeService.addedShapes$.subscribe((shapes) => {
      this.shapes = shapes;
    });
  }

  close() {
    console.log('close')
    this.activeModal.dismiss();
  }
}
