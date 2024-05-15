import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css',
})
export class ThemeSwitchComponent {
  @Input() theme!: string;
  @Input() themeReturn!: string;
  @Output() themeChange = new EventEmitter<string>();
  @Output() themeReturnChange = new EventEmitter<string>();

  themeSwitch() {
    this.themeChange.emit(this.theme);
  }

  themeReturner() {
    this.themeReturnChange.emit(this.theme);
  }
}
