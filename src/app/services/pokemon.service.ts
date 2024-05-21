import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core' ;
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokeBaseURL:string = '';
  private locationBaseURL:string = '';
  private Data:PokemonData | any;
  //private req:any;
  constructor(
    private http:HttpClient
  ) {
    this.pokeBaseURL = environment.pokeApi
    // this.locationBaseURL = environment.pokeLocationApi
  }

  getPokemon(pokemonName:number|string):Observable<PokemonData> {
    this.Data = this
               .http
               .get<PokemonData>(`${this.pokeBaseURL}${pokemonName}`)
    return this.Data;
  }



  // getLocation(locationnName:number|string):Observable<PokemonData> {
  //   this.Data = this
  //              .http
  //              .get<PokemonData>(`${this.locationBaseURL}${locationnName}`)
  //   return this.Data;
  // }
}
