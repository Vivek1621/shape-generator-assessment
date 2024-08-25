import { Component } from '@angular/core';
import { ObjectInArray, ShapeService } from '../../core/services/shape.service';
import { CommonModule } from '@angular/common';
import { ShapeComponent } from '../../shared/components/shape/shape.component';
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShapeComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedObject: any;
  favorites: ObjectInArray[] = [];

  constructor(private shapeService: ShapeService, private modalService: NgbModal) {}

  showNextShape() {
    this.displayedObject = this.shapeService.getCurrentShape();
  }

  addShapeToFavorites() {
    if (this.displayedObject && !this.favorites.includes(this.displayedObject)) {
      this.favorites.push(this.displayedObject);
    }
  }

  addShapeToModal(shapeObj:ObjectInArray) {
    if (shapeObj) {
      this.shapeService.addShape(shapeObj);
      this.modalService.open(ModalComponent);
    }
  }


  removeShapeFromFavorites(shape: ObjectInArray) {
    this.favorites = this.favorites.filter(fav => fav !== shape);
  }
}
