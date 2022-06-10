import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Budget } from '../../budget/entities/budget.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class PlannedExpense {
  @PrimaryGeneratedColumn('uuid')
  plannedExpense_id: string;
  
  @Column('float')
  amount: number

  @ManyToOne(() => Budget, (budget) => budget.planned_expenses)
  budget: Budget

  @ManyToOne(() => Category, (category) => category.planned_expenses)
  category: Category

  constructor(amount: number, budget: Budget, category: Category) {
    this.amount = amount
    this.budget = budget
    this.category = category
  }
}

