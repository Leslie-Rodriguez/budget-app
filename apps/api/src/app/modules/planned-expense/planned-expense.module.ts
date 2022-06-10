import { Module } from '@nestjs/common';
import { PlannedExpenseService } from './planned-expense.service';
import { PlannedExpenseController } from './planned-expense.controller';
import { PlannedExpense } from './entities/planned-expense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlannedExpense])],
  controllers: [PlannedExpenseController],
  providers: [PlannedExpenseService],
})
export class PlannedExpenseModule {}
