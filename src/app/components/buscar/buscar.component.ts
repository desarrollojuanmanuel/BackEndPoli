import { Component, OnInit } from '@angular/core';
import {StarWarsService} from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  numpeliculas: any = '';
  Pelicula: any = '';
  bandera = false;

  constructor(private starWars: StarWarsService) {
    this.starWars.getNewRelease().subscribe((data: any) => {
      this.numpeliculas = data.results.length;
    });
  }
  public buscar(termino: number) {

      // tslint:disable-next-line: triple-equals
      if ((termino < 8) && termino != 0) {
        this.starWars.getPelicula(termino).subscribe((data: any) => {
          console.log(data.title.length);
          if (data.title.length > 0) {
              this.Pelicula = data;
              this.bandera = true;
          }

        });
    } else {
      this.bandera = false;
      alert('numero no valido');
    }
  }

  ngOnInit() {
  }

}
