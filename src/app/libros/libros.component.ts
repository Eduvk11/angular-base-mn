import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent implements OnInit, OnDestroy {

  libros = [];
  constructor(private librosService: LibrosService){}
  private libroSubcription: Subscription;

  eliminarLibro(libro){
    // this.libros = this.libros.filter( p => p !== libro);
  }

  guardarLibro(f) {
    if(f.valid){
      this.librosService.agregarLibro(f.value.nombreLibro);
      //this.libros.push(f.value.nombreLibro);
    }
  }
  ngOnInit(){
    this.libros = this.librosService.obtenerLibros();

    this.libroSubcription = this.librosService.librosSubject.subscribe( () => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSubcription.unsubscribe();
  }



}
