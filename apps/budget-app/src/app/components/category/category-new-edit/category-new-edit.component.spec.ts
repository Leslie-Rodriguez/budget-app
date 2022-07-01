import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNewEditComponent } from './category-new-edit.component';

describe('CategoryNewEditComponent', () => {
  let component: CategoryNewEditComponent;
  let fixture: ComponentFixture<CategoryNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryNewEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
