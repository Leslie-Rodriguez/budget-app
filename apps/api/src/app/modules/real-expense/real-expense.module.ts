import { Module } from '@nestjs/common';
import { RealExpenseService } from './real-expense.service';
import { RealExpenseController } from './real-expense.controller';
import { RealExpense } from './entities/real-expense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RealExpense])],
  controllers: [RealExpenseController],
  providers: [RealExpenseService],
})
export class RealExpenseModule {}
