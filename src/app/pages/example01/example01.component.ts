import { Component } from '@angular/core';
import { CatFactService } from '../../services/cat-fact.service';
import { CatFact } from '../../interfaces/examples';

@Component({
  selector: 'app-example01',
  standalone: true,
  imports: [],
  templateUrl: './example01.component.html',
  styleUrl: './example01.component.css'
})
export class Example01Component {

  fact: CatFact[]=[];
  constructor(private catFactService: CatFactService){}
  getFact(){
    this.catFactService.getFact().subscribe({
      next:(result)=>{
this.fact = result.fact;
      }, error:(err)=>{console.log(err);}
    })
  }
}
