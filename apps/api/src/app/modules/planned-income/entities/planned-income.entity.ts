import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Budget } from '../../budget/entities/budget.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class PlannedIncome {
    @PrimaryGeneratedColumn('uuid')
    plannedIncome_id: string;
    
    @Column('float')
    amount: number
  
    @ManyToMany(() => Budget, budget => budget.planned_income)
    budget : Budget
  
    @ManyToMany(() => Category, category => category.planned_income)
    category : Category

    constructor(amount: number, budget: Budget, category: Category) {
        this.amount = amount
        this.budget = budget
        this.category = category
    }
}

