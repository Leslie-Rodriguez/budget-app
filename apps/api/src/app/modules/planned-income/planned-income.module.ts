import { Module } from '@nestjs/common';
import { PlannedIncomeService } from './planned-income.service';
import { PlannedIncomeController } from './planned-income.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlannedIncome } from './entities/planned-income.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlannedIncome])],
  controllers: [PlannedIncomeController],
  providers: [PlannedIncomeService],
})
export class PlannedIncomeModule {}

