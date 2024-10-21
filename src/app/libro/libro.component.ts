import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent {
  @Input() tituloLibro: string;
  @Output() libroClicked = new EventEmitter();

  onCliked() {
    this.libroClicked.emit();
  }
}
