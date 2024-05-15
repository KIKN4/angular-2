import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { Card } from '../type/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  className = 'card';
  @Input() messi!: Card;
  @Input() background =
    'url("https://m.media-amazon.com/images/I/81lZe4-gJ2L._AC_UF894,1000_QL80_.jpg")';
  @Output() changeBackground = new EventEmitter<Card>();

  onChange() {
    this.changeBackground.emit(this.messi);
  }
}
