import { Test, TestingModule } from '@nestjs/testing';
import { PlannedIncomeController } from './planned-income.controller';
import { PlannedIncomeService } from './planned-income.service';

describe('PlannedIncomeController', () => {
  let controller: PlannedIncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlannedIncomeController],
      providers: [PlannedIncomeService],
    }).compile();

    controller = module.get<PlannedIncomeController>(PlannedIncomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
