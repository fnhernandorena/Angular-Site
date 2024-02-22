import { Component } from '@angular/core';

interface Movie {
  title: string;
  year: string;
  poster: string;
  rank: string;
  actors: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
