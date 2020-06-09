import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { SearchComponent } from './components/shared/search/search.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
    { path: 'home', component: GridCardsComponent },
    { path: 'description/:id', component: DescriptionPokemonComponent},
    { path: 'search', component: SearchComponent},
    { path: 'about-us', component: AboutUsComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});