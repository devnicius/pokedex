import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NgFor } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { concat, debounce, debounceTime, defer, exhaustMap, filter, finalize, map, merge, mergeMap, MonoTypeOperatorFunction, Observable, of, pipe, ReplaySubject, takeUntil, takeWhile, tap, throttleTime, timer, windowCount, windowTime } from 'rxjs';
import { ObservableInput } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports:
    [NgFor,
      MatInputModule,
      MatFormFieldModule,
    ]
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
  @Input()
  name:string|number = 'tyranitar';
/**Types for color test
 * igglybuff
 * vileplume
 * dragonite
 * charizard
 * blastoise
 * alakazam
 * onix
 * articuno
 * gengar
 * machop
 */


  constructor(
    private service:PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string) {

    if (searchName)
    this.service.getPokemon(searchName.toLowerCase().replace(' ', '-'))
      .pipe(throttleTime(1000))
        // .pipe(this.lazySample(() => timer(0, 1000000)))
        .subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name.replace('-', ' '),
          types: res.types,
          sprites: res.sprites
        }
      },
      error: (err) => console.log('not found'),
    });
  }



  // lazySample(
  //   notifierSelector: (value: any) => Observable<any|unknown>,
  //   includeFinal: boolean = true
  // ): MonoTypeOperatorFunction<any> {
  //   return (source) =>
  //     defer(() => {
  //       const finalValue = new ReplaySubject();
  //       let hasValue: boolean = false;
  //       let lastValue: any | null = null;

  //       return concat(
  //         source.pipe(
  //           tap((val) => {
  //             lastValue = val;
  //             hasValue = true;
  //           }),
  //           finalize(() => {
  //             finalValue.next(lastValue);
  //             finalValue.complete();
  //           }),
  //           exhaustMap((value) =>
  //             notifierSelector(value).pipe(
  //               takeUntil(finalValue),
  //               takeWhile(() => hasValue),
  //               map(() => {
  //                 hasValue = false;
  //                 return lastValue;
  //               })
  //             )
  //           )
  //         ),
  //         finalValue.pipe(filter(() => hasValue && includeFinal))
  //       );
  //     });
  // }
}
