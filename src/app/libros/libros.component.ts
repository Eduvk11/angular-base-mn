import { Component } from '@angular/core';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent {
  libros = ['Matematicas 1', 'Algoritmos', 'Algebra'];

  eliminarLibro(libro){
    this.libros = this.libros.filter( p => p !== libro);
  }

}
