import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PlannedExpense } from '../../planned-expense/entities/planned-expense.entity';
import { PlannedIncome } from '../../planned-income/entities/planned-income.entity';
import { RealExpense } from '../../real-expense/entities/real-expense.entity';
import { RealIncome } from '../../real-income/entities/real-income.entity';
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  category_id: string;

  @Column()
  name: string;

  @Column({default : 'Lorem ipsum dolor sit amet consectetur adipisicing elit'})
  description: string;

  @OneToMany(() => PlannedExpense, (planned_expense) => planned_expense.category)
  planned_expenses: PlannedExpense[]

  @OneToMany(() => PlannedIncome, (planned_income) => planned_income.category)
  planned_income: PlannedIncome[]

  @OneToMany(() => RealExpense, (real_expense) => real_expense.category)
  real_expense: RealExpense[]

  @OneToMany(() => RealIncome, (real_income) => real_income.category)
  real_income: RealIncome[]

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description
    console.log('Creo Category Entity para ' + this.name);
  }
}
