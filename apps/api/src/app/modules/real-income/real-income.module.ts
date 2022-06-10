import { Module } from '@nestjs/common';
import { RealIncomeService } from './real-income.service';
import { RealIncomeController } from './real-income.controller';
import { RealIncome } from './entities/real-income.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RealIncome])],
  controllers: [RealIncomeController],
  providers: [RealIncomeService],
})
export class RealIncomeModule {}
