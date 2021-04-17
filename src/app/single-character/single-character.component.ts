import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/Pokemon';
import { CharacterRepositoryService } from '../services/character-repository.service';


@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit {
  character$?: Observable<Pokemon> = undefined;
  
  constructor(
    private charactersRepository: CharacterRepositoryService, 
    private activatedRoute: ActivatedRoute 
    ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.character$ = this.charactersRepository
      .getCharacterById(
        this.activatedRoute.snapshot.params.id
      ).pipe(map((response) => {
        console.log(response)
        return response.data
      }));
    }
  }
}
