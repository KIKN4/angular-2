import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { Card } from '../type/card';

@Component({
  selector: 'app-kvara',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './kvara.component.html',
  styleUrl: './kvara.component.css',
})
export class KvaraComponent {
  className = 'card';
  @Input() kvara!: Card;
  @Input() background =
    'url("https://cdn.countryflags.com/thumbs/georgia/flag-400.png")';
  @Output() changeBackground = new EventEmitter<Card>();

  onChange() {
    this.changeBackground.emit(this.kvara);
  }
}
