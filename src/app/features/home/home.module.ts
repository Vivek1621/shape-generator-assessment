import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ShapeComponent } from '../../shared/components/shape/shape.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [CommonModule,HomeComponent, ShapeComponent, ModalComponent],
  providers:[NgbActiveModal, NgbModule],
  exports: [HomeComponent], 
})
export class HomeModule {}
