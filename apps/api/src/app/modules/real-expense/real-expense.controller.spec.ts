import { Test, TestingModule } from '@nestjs/testing';
import { RealExpenseController } from './real-expense.controller';
import { RealExpenseService } from './real-expense.service';

describe('RealExpenseController', () => {
  let controller: RealExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealExpenseController],
      providers: [RealExpenseService],
    }).compile();

    controller = module.get<RealExpenseController>(RealExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
