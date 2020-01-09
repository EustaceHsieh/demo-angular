import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageSerivce: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageSerivce.add('查詢Heroe List資料....');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageSerivce.add(`查詢Hero id:${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
