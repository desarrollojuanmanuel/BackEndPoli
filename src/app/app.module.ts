import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// importar componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscarComponent } from './components/buscar/buscar.component';

// importar rutas
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeliculasComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash:false} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
