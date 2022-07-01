import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryNewEditComponent } from '../category/category-new-edit/category-new-edit.component';
import { CategoryComponent } from '../category/category.component';
import { UserNewEditComponent } from '../users/user-new-edit/user-new-edit.component';
import { UsersComponent } from '../users/users.component';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent, children: [
  {path: 'category', component:CategoryComponent},
  {path: 'category/new', component: CategoryNewEditComponent},
  {path: 'category/edit/:id', component: CategoryNewEditComponent},
  {path: 'user', component:UsersComponent},
  {path: 'user/new', component: UserNewEditComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
