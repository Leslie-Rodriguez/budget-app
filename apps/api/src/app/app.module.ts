import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { BudgetModule } from './modules/budget/budget.module';
import { CategoryModule } from './modules/category/category.module';
import { PlannedExpenseModule } from './modules/planned-expense/planned-expense.module';
import { PlannedIncomeModule } from './modules/planned-income/planned-income.module';
import { RealExpenseModule } from './modules/real-expense/real-expense.module';
import { RealIncomeModule } from './modules/real-income/real-income.module';
import { User } from './modules/user/entities/user.entity';
import { Budget } from './modules/budget/entities/budget.entity';
import { Category } from './modules/category/entities/category.entity';
import { PlannedExpense } from './modules/planned-expense/entities/planned-expense.entity';
import { PlannedIncome } from './modules/planned-income/entities/planned-income.entity';
import { RealExpense } from './modules/real-expense/entities/real-expense.entity';
import { RealIncome } from './modules/real-income/entities/real-income.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "mariaP123",
    "database": "expenses2",
    "entities": [User, Budget, Category, PlannedExpense, PlannedIncome, RealExpense, RealIncome],
    "synchronize": true
    }), 

    UserModule,
    BudgetModule,
    CategoryModule,
    PlannedExpenseModule,
    PlannedIncomeModule,
    RealExpenseModule,
    RealIncomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
