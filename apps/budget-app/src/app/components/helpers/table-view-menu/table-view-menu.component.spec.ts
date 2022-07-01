import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewMenuComponent } from './table-view-menu.component';

describe('TableViewMenuComponent', () => {
  let component: TableViewMenuComponent;
  let fixture: ComponentFixture<TableViewMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableViewMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableViewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
