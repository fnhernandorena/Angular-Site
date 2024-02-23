import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NasaImageService } from '../../services/epic-nasa.service';

@Component({
  selector: 'app-example04',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './example04.component.html',
  styleUrl: './example04.component.css'
})
export class Example04Component implements OnInit {
  dayImages: any[] = [];

  constructor(private nasaImageService: NasaImageService) { }

  ngOnInit(): void {
    this.getDayImages();
  }

  getDayImages(): void {
    this.nasaImageService.getDayImages()
      .subscribe(
        (data: any[]) => {
          this.dayImages = data;
        },
        (error: any) => {
          console.error('Error fetching NASA images:', error);
        }
      );
  }
  getImageUrl(date: string, imageId: string): string {
    // Implementa la lógica para obtener la URL de la imagen aquí
    const dateParts = date.split(' ')[0].split('-');
    return `https://api.nasa.gov/EPIC/archive/natural/${dateParts[0]}/${dateParts[1]}/${dateParts[2]}/png/${imageId}.png?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA`;
  }
}