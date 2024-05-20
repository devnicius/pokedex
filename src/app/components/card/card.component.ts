import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = {
    id:0,
    name:'',
    types: [],
    sprites:{
      front_default: ''
    }
  }
  name:string = 'pikachu';
  constructor(
    private service:PokemonService
  ) { }

  ngOnInit(): void {
    this.service.getPokemon(this.name).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          types: res.types,
          sprites: res.sprites
        }
        console.log(this.pokemon)

      },
      error: (err) => console.log(err),
      complete: () => console.log('ok')
    });
  }

}
