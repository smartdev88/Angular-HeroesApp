import { Component, OnInit } from '@angular/core';
//import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero: Hero = { id: 1, name: 'Windstorm' };

  //heroes = HEROES;
  //selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  */

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
