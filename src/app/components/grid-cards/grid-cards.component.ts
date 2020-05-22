import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { pluck, switchMap, concatMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent {
  //Input sirve cuando yo quiero pasar informacion de un elemento padre a un elemento hijo
  

  public arrayPokemon: Array<any> = [];
  public loading: boolean = false;
  private urlApiPokemon = `https://pokeapi.co/api/v2/pokemon`;
  public indicePaginacion = 1;

  constructor(private http: HttpClient) {
    this.getPokemons(this.urlApiPokemon);
  }
  
  public getPokemons(urlApi: string){
    this.arrayPokemon = [];
    this.loading=true;
    this.http.get(urlApi)
    .pipe(
      pluck('results'),
      switchMap((pokemonsArray: Array<any>) =>
        from(pokemonsArray)
        .pipe(
          pluck('url'), 
          concatMap((url: string) => this.http.get(url))
        )
      )
    )
    .subscribe((pokemon) => {
      this.arrayPokemon.push(pokemon);
      if(this.arrayPokemon.length === 20){
        this.loading = false;
      }
    }
    );
  }

  public PaginationRight(){
    const offset = this.indicePaginacion * 20;
    this.indicePaginacion++;
    const urlActualizado = `${this.urlApiPokemon}?offset=${offset}&limit=20`;
    // console.log(urlActualizado);
    this.getPokemons(urlActualizado);
  }

  public PaginacionLeft(){
    if(this.indicePaginacion == 1) return;
    this.indicePaginacion--;
    const offset = (this.indicePaginacion * 20)-20; 
    const urlActualizado = `${this.urlApiPokemon}?offset=${offset}&limit=20`;
    console.log(urlActualizado);
    this.getPokemons(urlActualizado);

  }
}
