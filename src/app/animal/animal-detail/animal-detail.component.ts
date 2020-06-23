import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/api/animal';
import { AnimalService } from 'src/app/shared/api/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animal = this.animalService.get();
  }

}
