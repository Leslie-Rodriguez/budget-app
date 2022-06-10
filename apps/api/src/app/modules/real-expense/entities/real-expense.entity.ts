import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Budget } from '../../budget/entities/budget.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class RealExpense {
    @PrimaryGeneratedColumn('uuid')
    realExpense_id: string;
    
    @Column('float')
    amount: number
  
    @Column()
    date: Date
  
    @ManyToOne(() => Budget, budget => budget.real_expense)
    budget : Budget
  
    @ManyToOne(() => Category, category => category.real_expense)
    category : Category

    constructor(amount: number, date: Date, budget : Budget, category : Category) {
        this.amount = amount
        this.date = date
        this.budget = budget;
        this.category = category
    }
}

