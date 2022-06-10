import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Budget } from '../../budget/entities/budget.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class RealIncome {
    @PrimaryGeneratedColumn('uuid')
    realIncome_id: string;
    
    @Column('float')
    amount: number
    
    @Column()
    date: Date
    
    @ManyToOne(() => Budget, budget => budget.real_income)
    budget : Budget
    
    @ManyToOne(() => Category, category => category.real_income)
    category : Category
    
    constructor(amount: number, date: Date, budget : Budget, category : Category) {
        this.amount = amount
        this.date = date
        this.budget = budget;
        this.category = category
    }
}
