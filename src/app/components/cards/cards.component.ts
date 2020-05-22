import { Component, OnInit, Input } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() pokemonInput: Array<any>;
  
  constructor(private routes: Router) {
  }
  
  ngOnInit(): void {

  }

  public GoToDescription(id: number){
    this.routes.navigate(['description', id]);
    console.log(id);
  }

}
