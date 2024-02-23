import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Example01Component } from './pages/example01/example01.component';
import { Example02Component } from './pages/example02/example02.component';
import { Example03Component } from './pages/example03/example03.component';
import { Example04Component } from './pages/example04/example04.component';
import { Example05Component } from './pages/example05/example05.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'example01', component: Example01Component},
    {path: 'example02', component: Example02Component},
    {path: 'example03', component: Example03Component},
    {path: 'example04', component: Example04Component},
    {path: 'example05', component: Example05Component}  
];
