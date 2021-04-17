import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { HomeComponent } from './home/home.component';
import { SingleCharacterComponent } from './single-character/single-character.component';

// Créer une page par composant
const routes: Routes = [
  {
    path:  'characters', // Chemin
    component: AllCharactersComponent, // Composant à afficher
  },
  {
    path:  'character/:id', // Chemin
    component: SingleCharacterComponent, // Composant à afficher
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
