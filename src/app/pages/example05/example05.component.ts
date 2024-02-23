import { Component } from '@angular/core';
import { MarsPhotoService } from '../../services/mars-images.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-example05',
  standalone: true,
  imports: [NgForOf, ReactiveFormsModule, FormsModule],
  templateUrl: './example05.component.html',
  styleUrl: './example05.component.css'
})
export class Example05Component{
    searchTerm: string = '';
    photos: any[] = [];
  
    constructor(private marsPhotoService: MarsPhotoService) { }
  
  
    searchPhotos(): void {
      this.marsPhotoService.searchPhotos(this.searchTerm)
        .subscribe(
          (data: any) => {
            this.photos = data.photos;
          },
          (error: any) => {
            console.error('Error at get Mars photos', error);
          }
        );
    }
  }

