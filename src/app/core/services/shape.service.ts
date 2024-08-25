import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SHAPES } from '../constants/shape.constants';

export interface ObjectInArray {
  name: string;
  number?: number;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShapeService {
  private objects = SHAPES;
  private currentObjectIndex = 0;

  private addedShapesSubject = new BehaviorSubject<ObjectInArray[]>([]);
  addedShapes$ = this.addedShapesSubject.asObservable();

  getCurrentShape(): ObjectInArray {
    const shape = this.objects[this.currentObjectIndex];
    this.currentObjectIndex = (this.currentObjectIndex + 1) % this.objects.length;
    return shape;
  }

  addShape(shape: ObjectInArray) {
    const updatedShapes = [shape];
    this.addedShapesSubject.next(updatedShapes);
  }
}
