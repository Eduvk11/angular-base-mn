import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component'
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component'
import { LibroComponent } from './libro/libro.component'
import { LibrosService } from './services/libros.service';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
