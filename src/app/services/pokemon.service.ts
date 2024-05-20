import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core' ;
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = '';
  private Data:PokemonData | any;
  //private req:any;
  constructor(
    private http:HttpClient
  ) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName:string):Observable<PokemonData> {
    this.Data = this
               .http
               .get<PokemonData>(`${this.baseURL}${pokemonName}`)
    return this.Data;
  }
}
