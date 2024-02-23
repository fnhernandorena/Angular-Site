import { Component, OnInit } from '@angular/core';
import { NasaMediaService } from '../../services/day-image.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-example03',
  standalone: true,
  imports: [NgIf],
  templateUrl: './example03.component.html',
  styleUrl: './example03.component.css'
})
export class Example03Component implements OnInit {
  dayImage: any;

  constructor(private nasaMediaService: NasaMediaService) {}

  ngOnInit(): void {
    this.getMedia();
  }

  getMedia(): void {
    this.nasaMediaService.getMedia().subscribe(
      (data: any) => {
        this.dayImage = data;
      },
      (error: any) => {
        console.error('Error al obtener la imagen del día:', error);
      }
    );
  }

  get mediaType(): string {
    return this.dayImage?.media_type;
  }
}