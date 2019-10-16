import { Component, OnInit } from '@angular/core';
import {StarWarsService} from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private starWars: StarWarsService) {
    this.starWars.getNewRelease().subscribe((data: any) => {
      this.peliculas = data.results;
      console.log(this.peliculas);
    });
  }

  ngOnInit() {
  }

}
