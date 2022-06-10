import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealExpense } from './entities/real-expense.entity';

@Injectable()
export class RealExpenseService {
  constructor(
    @InjectRepository(RealExpense)
    private readonly realExpensesRepository: Repository<RealExpense>,
  ) {}

  insertRealExpense(insertRealExpenseService: RealExpense) {
      return this.realExpensesRepository.save(insertRealExpenseService);
  }

  async findAll(): Promise<RealExpense[]> {
      return this.realExpensesRepository.find();
    }

  findOne(realExpense_id: string): Promise<RealExpense> {
      return this.realExpensesRepository.findOne({where: {realExpense_id: realExpense_id }});
  }

  async remove(id: string): Promise<void> {
      await this.realExpensesRepository.delete(id);
  }

  async update(realExpense_id: string, updateRealExpenseService: RealExpense): Promise<RealExpense> {
      const user = await this.realExpensesRepository.preload({
          realExpense_id: realExpense_id,
          ...updateRealExpenseService,
      });
      if (!user) {
        throw new NotFoundException(`Item ${realExpense_id} not found`);
      }
      return this.realExpensesRepository.save(user);
    }
}

