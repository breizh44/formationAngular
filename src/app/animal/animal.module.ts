import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AnimalDetailComponent, AnimalListComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalDetailComponent, AnimalListComponent]
})
export class AnimalModule { }
