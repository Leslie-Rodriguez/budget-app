/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'budget-app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @ViewChild('link') link: ElementRef | undefined;

  items = [{name: "Category", path:'category'}, {name: "User", path:'user'}, {name:"Primary 3", path:''}, {name:"Primary 4", path:''}]
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    
  }
  linkInfo() {
    console.log(this.link)
    console.log(this.link?.nativeElement.pathname)

  }

}
