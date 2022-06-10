import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetService {
  constructor(@InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {}

insertBudget(insertBudgetService: Budget) {
    return this.budgetRepository.save(insertBudgetService);
}

async findAll(): Promise<Budget[]> {
    return this.budgetRepository.find();
  }

findOne(budget_id: string): Promise<Budget> {
    return this.budgetRepository.findOne({where: {budget_id: budget_id }});
}

async remove(id: string): Promise<void> {
    await this.budgetRepository.delete(id);
}

async update(budget_id: string, updateBudgetDto: Budget): Promise<Budget> {
    const budget = await this.budgetRepository.preload({
        budget_id: budget_id,
        ...updateBudgetDto,
    });
    if (!budget) {
      throw new NotFoundException(`Item ${budget_id} not found`);
    }
    return this.budgetRepository.save(budget);
  }
}

