import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorMatcher } from '../../utils/error-matcher.component';

@Component({
  selector: 'budget-app-category-new-edit',
  templateUrl: './category-new-edit.component.html',
  styleUrls: ['./category-new-edit.component.css'],
})
export class CategoryNewEditComponent {
  nameFormControl = new FormControl('', [Validators.required]);
  descFormControl = new FormControl('', [Validators.required]);

  matcher = new ErrorMatcher();
}
