import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { CardsComponent } from './components/cards/cards.component';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { appRouting } from './app.routes';

//Importacion metodo http
import { HttpClientModule } from "@angular/common/http";
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { ChangeColorTypeDirective } from './directives/change-color-type.directive';
import { SearchComponent } from './components/shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CardsComponent,
    DescriptionPokemonComponent,
    GridCardsComponent,
    ChangeColorTypeDirective,
    SearchComponent,
  ],
  imports: [
    appRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
