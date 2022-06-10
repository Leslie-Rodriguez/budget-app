import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlannedExpense } from './entities/planned-expense.entity';

@Injectable()
export class PlannedExpenseService {
  constructor(
    @InjectRepository(PlannedExpense)
    private readonly plannedExpensesRepository: Repository<PlannedExpense>,
  ) {}

  insertPlannedExpense(insertPlannedExpenseService: PlannedExpense) {
      return this.plannedExpensesRepository.save(insertPlannedExpenseService);
  }

  async findAll(): Promise<PlannedExpense[]> {
      return this.plannedExpensesRepository.find();
    }

  findOne(plannedExpense_id: string): Promise<PlannedExpense> {
      return this.plannedExpensesRepository.findOne({where: {plannedExpense_id: plannedExpense_id }});
  }

  async remove(id: string): Promise<void> {
      await this.plannedExpensesRepository.delete(id);
  }

  async update(plannedExpense_id: string, updateRealExpenseService: PlannedExpense): Promise<PlannedExpense> {
      const planned_expense = await this.plannedExpensesRepository.preload({
          plannedExpense_id: plannedExpense_id,
          ...updateRealExpenseService,
      });
      if (!planned_expense) {
        throw new NotFoundException(`Item ${plannedExpense_id} not found`);
      }
      return this.plannedExpensesRepository.save(planned_expense);
    }
}

