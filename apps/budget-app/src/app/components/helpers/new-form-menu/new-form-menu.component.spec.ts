import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormMenuComponent } from './new-form-menu.component';

describe('NewFormMenuComponent', () => {
  let component: NewFormMenuComponent;
  let fixture: ComponentFixture<NewFormMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFormMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewFormMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
