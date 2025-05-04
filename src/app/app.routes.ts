import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ErrorComponent } from './pages/error/error.component';
import { CoctelesComponent } from './pages/cocteles/cocteles.component';
import { RymComponent } from './pages/rym/rym.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'rym', component: RymComponent},
    {path: 'pokemon', component: PokemonComponent},
    {path: 'cocteles', component: CoctelesComponent},
    {path: 'miapi', loadChildren: () => import('./pages/miapi/miapi-routing.module').then(m =>m.MiapiRoutingModule)},
    {path: '**', component: ErrorComponent}
];
