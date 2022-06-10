import { Test, TestingModule } from '@nestjs/testing';
import { PlannedIncomeService } from './planned-income.service';

describe('PlannedIncomeService', () => {
  let service: PlannedIncomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlannedIncomeService],
    }).compile();

    service = module.get<PlannedIncomeService>(PlannedIncomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
