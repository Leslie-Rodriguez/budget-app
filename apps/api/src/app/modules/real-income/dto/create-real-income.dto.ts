import { Budget } from "../../budget/entities/budget.entity";
import { Category } from "../../category/entities/category.entity";

export class CreateRealIncomeDto {
    amount: number;
    date: Date;
    budget : Budget;
    category : Category;

    constructor(amount: number, date: Date, budget : Budget, category : Category) {
        this.amount = amount
        this.date = date
        this.budget = budget;
        this.category = category
    }

}
