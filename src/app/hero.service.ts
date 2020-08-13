import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService  } from './message.service';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add(`HeroService: Fetched Heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: Fetched with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }


}
