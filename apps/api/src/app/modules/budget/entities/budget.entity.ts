import { Entity, Column, PrimaryGeneratedColumn , ManyToMany, JoinTable, OneToMany} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { PlannedExpense } from '../../planned-expense/entities/planned-expense.entity';
import { PlannedIncome } from '../../planned-income/entities/planned-income.entity';
import { RealExpense } from '../../real-expense/entities/real-expense.entity';
import { RealIncome } from '../../real-income/entities/real-income.entity';

@Entity()
export class Budget {
 @PrimaryGeneratedColumn('uuid')
  budget_id: string;

  @Column()
  init_date: Date;

  @Column()
  final_date: Date;

  @ManyToMany(() => User, user => user.budget, {
      cascade: true
  })
  @JoinTable()
  user: User[]
  
  @OneToMany(() => PlannedExpense, (planned_expense) => planned_expense.budget)
  planned_expenses: PlannedExpense[]

  @OneToMany(() => PlannedIncome, (planned_income) => planned_income.budget)
  planned_income: PlannedIncome[]

  @OneToMany(() => RealExpense, (real_expense) => real_expense.budget)
  real_expense: RealExpense[]

  @OneToMany(() => RealIncome, (real_income) => real_income.budget)
  real_income: RealIncome[]
  
  constructor(init_date: Date, final_date: Date) {
    this.init_date = init_date;
    this.final_date = final_date
    console.log('Creo Budget Entity para ' + this.init_date);
  }
}
