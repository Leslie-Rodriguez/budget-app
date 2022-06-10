import { Budget } from "../../budget/entities/budget.entity";
import { Category } from "../../category/entities/category.entity";

export class CreatePlannedIncomeDto {
    amount: number;
    budget : Budget;
    category : Category;

    constructor(amount: number, budget: Budget, category: Category) {
        this.amount = amount
        this.budget = budget
        this.category = category
    }
}
