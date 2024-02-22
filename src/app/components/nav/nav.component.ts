import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgForOf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  links = [
    {path:'/home', name: 'Home'},
    {path:'/example01', name: 'Example 01'},
    {path:'/example02', name: 'Example 02'},
    {path:'/example03', name: 'Example 03'},
    {path:'/example04', name: 'Example 04'},
    {path:'/example05', name: 'Example 05'}
   ];
}