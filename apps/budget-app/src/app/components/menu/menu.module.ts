import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { NewFormMenuComponent } from '../helpers/new-form-menu/new-form-menu.component';
import { TableViewMenuComponent } from '../helpers/table-view-menu/table-view-menu.component';
import { CategoryComponent } from '../category/category.component';
import { CategoryNewEditComponent } from '../category/category-new-edit/category-new-edit.component';
import { UsersComponent } from '../users/users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    NewFormMenuComponent,
    TableViewMenuComponent,
    CategoryComponent,
    CategoryNewEditComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
