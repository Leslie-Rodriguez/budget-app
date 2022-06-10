import { Test, TestingModule } from '@nestjs/testing';
import { PlannedExpenseController } from './planned-expense.controller';
import { PlannedExpenseService } from './planned-expense.service';

describe('PlannedExpenseController', () => {
  let controller: PlannedExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlannedExpenseController],
      providers: [PlannedExpenseService],
    }).compile();

    controller = module.get<PlannedExpenseController>(PlannedExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
