import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, take, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  //Decorador que sirve para hacer referencia a un elemento html por medio del id de angular (#id)
  //Estructura: @ViewChild('#nombreID') NombreElemento: TipoElemento;
  @ViewChild('inputSearch') inputSearch: ElementRef;
  private url = `https://pokeapi.co/api/v2/pokemon/`;
  public pokemonRecibido: any;
  public loading = true;


  //Constructor: Funcion que se ejecuta cuando se instancia un componente. 
  //Cuando se instancia un componente?. Cuando usamos su etiqueta, ok?
  constructor(private http: HttpClient) { }

  //ngOninit: Funcion que se ejecuta despues del constructor y cuando se terminan de crear el HTML y el CSS 
  //si tengo un metodo que haga referencia a una etiqueta HTML, necesito ponerlo aqui, porque si lo pongo en el contructor 
  //me va a marcar un error de que el elemento no existe. 
  //Aqui solo se instancian los inputs y outputs
  ngOnInit(): void {
  }

  //Es un metodo que se ejecuta despues del ngOnInit
  //Su objetivo es verificar que los elementos ya esten renderizados 
  //la diferencia que tiene el ngAfter y el ngOnInit es que el after espera que sus elementos esten renderizados, 
  //y el onInit solo espera a que angular los haya construido en su logica pero sin renderizarlos, 
  //por lo tanto es necesario que establezcamos aqui todo lo que tenga que ver con viewchild debido a que 
  //este decorador busca la referencia del id en el DOM y no en la logica de angular. 
  ngAfterViewInit(): void{
    this.searchPokemon();
  }

  //searchPokemon: Metodo que nos ayudara a obtener la informacion del pokemon buscado por medio de rxjs
  searchPokemon(){
    fromEvent(this.inputSearch.nativeElement, 'keyup')
    .pipe(
      debounceTime(1500),
      pluck('target', 'value'), 
      switchMap(nombrePokemon => this.http.get(`${this.url}${nombrePokemon}`))
    )
    .subscribe(value => {
      this.loading = false;
      this.pokemonRecibido = value
    },
    (error) => this.searchPokemon()
    );
  }

}

//El callback error del susbcribe, vuelve a ejecutar la funcion searchPokemon, para volver a instanciar el fromEvent
//y poder continuar con las busquedas. 
