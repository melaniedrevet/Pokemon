import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class CharacterRepositoryService {

  constructor(private httpClient: HttpClient) { }

  // Fonction qui renvoie une promesse : await permet d'attendre que le get soit fini
   getAllCharacters(name?: String, types?: String) {

    // getAllCharacters(
    //   name :string ='', 
    //   types :string=''
    // ) {

   // getAllCharacters() {
    let paramsStr = '';

    if(name) {
      paramsStr += `name:${name} `;
    }
    if(types) {
      paramsStr += `types:${types} &`;
    }
    
    // return this.httpClient.get<{data:Array<Pokemon>}>(`https://api.pokemontcg.io/v2/cards`);
    return this.httpClient.get<{data:Pokemon[]}>(`https://api.pokemontcg.io/v2/cards?q=${paramsStr}`);
    // return this.httpClient.get<{data:Pokemon[]}>(`https://api.pokemontcg.io/v2/cards?name=${name}&types=${types}`);

  }

 

  getCharacterById(id: number) {
    return this.httpClient.get<{data:Pokemon}>(`https://api.pokemontcg.io/v2/cards/${id}`);

  }
}





