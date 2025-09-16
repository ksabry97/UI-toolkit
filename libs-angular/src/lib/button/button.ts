import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() content = 'submit';
  @Input() class: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Output() isClicked = new EventEmitter();

  onClick() {
    this.isClicked.emit();
  }
}
