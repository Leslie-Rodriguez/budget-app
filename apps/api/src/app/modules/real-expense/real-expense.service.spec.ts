import { Test, TestingModule } from '@nestjs/testing';
import { RealExpenseService } from './real-expense.service';

describe('RealExpenseService', () => {
  let service: RealExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealExpenseService],
    }).compile();

    service = module.get<RealExpenseService>(RealExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
