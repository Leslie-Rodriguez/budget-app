import { Test, TestingModule } from '@nestjs/testing';
import { PlannedExpenseService } from './planned-expense.service';

describe('PlannedExpenseService', () => {
  let service: PlannedExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlannedExpenseService],
    }).compile();

    service = module.get<PlannedExpenseService>(PlannedExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
