import { Component, Input } from '@angular/core';

@Component({
  selector: 'budget-app-new-form-menu',
  templateUrl: './new-form-menu.component.html',
  styleUrls: ['./new-form-menu.component.css'],
})
export class NewFormMenuComponent  {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  @Input() name = '';
  @Input() path = ''
  
}
