import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from "../mock-heroes";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros: Hero[];
  hero: Hero = { id: 1, name: "iisi" };

  // 被選擇的Hero資料
  selectedHero: Hero;

  constructor(private heroservice: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /**
 * 點選<li>標籤事件處理
 * @param hero
 */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroservice.getHeroes()
      .subscribe(data => (this.heros = data));
  }

}
