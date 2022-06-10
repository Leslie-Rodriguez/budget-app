import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealIncome } from './entities/real-income.entity';

@Injectable()
export class RealIncomeService {
  constructor(
    @InjectRepository(RealIncome)
    private readonly realIncomeRepository: Repository<RealIncome>,
  ) {}

  insertRealIncome(insertRealIncomeService: RealIncome) {
      return this.realIncomeRepository.save(insertRealIncomeService);
  }

  async findAll(): Promise<RealIncome[]> {
      return this.realIncomeRepository.find();
    }

  findOne(realIncome_id: string): Promise<RealIncome> {
      return this.realIncomeRepository.findOne({where: {realIncome_id: realIncome_id }});
  }

  async remove(id: string): Promise<void> {
      await this.realIncomeRepository.delete(id);
  }

  async update(realIncome_id: string, updateReaIncomeDto: RealIncome): Promise<RealIncome> {
      const real_income = await this.realIncomeRepository.preload({
          realIncome_id: realIncome_id,
          ...updateReaIncomeDto,
      });
      if (!real_income) {
        throw new NotFoundException(`Item ${realIncome_id} not found`);
      }
      return this.realIncomeRepository.save(real_income);
    }
}

