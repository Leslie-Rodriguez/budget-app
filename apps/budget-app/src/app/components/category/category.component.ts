import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'budget-app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  pageName = 'Category';
  new_path = '/dashboard/category/new';
  columns: string[] = ['category_id', 'name', 'description', 'options']
  dataSource = []
  category = {}

  selectCategory(category: any) {
    this.category = category
  }
  newCategory() {
    this.category = {}
  }
  ngOnInit(): void {
    this.categoryService.readCategory().subscribe((result: any) => {
      this.dataSource = result
      console.log(this.dataSource)
    })
  }

  /*createCategoryf){
    this.apiService.createCategoryf.value).subscribe((result)=>{
      console.log(result);
    });
    
  }

  deleteCategoryid){
    this.apiService.deleteCategoryid).subscribe((result)=>{
      console.log(result);
    });
  }

  updateCategoryf){
    f.value.id = this.contact['id'];
    this.apiService.updateCategoryf.value).subscribe((result)=>{
      console.log(result);
    });
  }
*/
}
