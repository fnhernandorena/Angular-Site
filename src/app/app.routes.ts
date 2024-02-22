import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Example01Component } from './pages/example01/example01.component';
import { Example02Component } from './pages/example02/example02.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'example01', component: Example01Component},
    {path: 'example02', component: Example02Component}
];
