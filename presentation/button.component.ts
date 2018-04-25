import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>
      {{ text }}
    </button>
  `,
  styles: [`
    button {
      padding: .5rem 1.5rem;
      display: inline-block;
      border: 3px solid #00698f;
      background-color: #00698f;
    }
  `]
})
export class ButtonComponent implements OnInit {

  @Input() text: string;

  constructor() {}

  ngOnInit() {}

}
