import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
/*import { CategoryComponent } from "./components/category/category.component";*/


const router: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', loadChildren: () => import('./components/menu/menu.module').then(page => page.MenuModule)}
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {}