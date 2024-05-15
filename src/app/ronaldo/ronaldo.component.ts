import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { Card } from '../type/card';

@Component({
  selector: 'app-ronaldo',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './ronaldo.component.html',
  styleUrl: './ronaldo.component.css',
})
export class RonaldoComponent {
  className = 'card';
  @Input() ronaldo!: Card;
  @Output() changeBackground = new EventEmitter<Card>();

  onChange() {
    this.changeBackground.emit(this.ronaldo);
  }
}
