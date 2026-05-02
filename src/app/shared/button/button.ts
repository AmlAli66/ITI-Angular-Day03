import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() title: string = '';

  @Input() color: string = 'btn-primary';

  @Input() width: string = '100%';

  @Input() disabled: boolean = false;

  @Output() btnClick = new EventEmitter<void>();



  onClick() {
    this.btnClick.emit();
  }
}
