import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './categoty';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  constructor(private httpClient: HttpClient) { 
  }
  API_SERVER = "http://localhost:3333/api" ;
  public readCategory():any {
    return this.httpClient.get<Category[]>(`${this.API_SERVER}/category`)
  }
  public createCategory(category: {name: string, description: string}) {
    return this.httpClient.post<Category>(`${this.API_SERVER}/category`, category)
  }

}
