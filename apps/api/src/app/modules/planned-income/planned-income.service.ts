import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlannedIncome } from './entities/planned-income.entity';

@Injectable()
export class PlannedIncomeService {
  constructor(@InjectRepository(PlannedIncome)
    private readonly plannedIncomeRepository: Repository<PlannedIncome>,
  ) {}

insertPlannedIncome(insertRealExpenseService: PlannedIncome) {
    return this.plannedIncomeRepository.save(insertRealExpenseService);
}

async findAll(): Promise<PlannedIncome[]> {
    return this.plannedIncomeRepository.find();
  }

findOne(plannedIncome_id: string): Promise<PlannedIncome> {
    return this.plannedIncomeRepository.findOne({where: {plannedIncome_id: plannedIncome_id }});
}

async remove(id: string): Promise<void> {
    await this.plannedIncomeRepository.delete(id);
}

async update(plannedIncome_id: string, updateRealExpenseService: PlannedIncome): Promise<PlannedIncome> {
    const income = await this.plannedIncomeRepository.preload({
        plannedIncome_id: plannedIncome_id,
        ...updateRealExpenseService,
    });
    if (!income) {
      throw new NotFoundException(`Item ${plannedIncome_id} not found`);
    }
    return this.plannedIncomeRepository.save(income);
  }
}
