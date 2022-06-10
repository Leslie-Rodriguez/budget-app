import { Test, TestingModule } from '@nestjs/testing';
import { RealIncomeController } from './real-income.controller';
import { RealIncomeService } from './real-income.service';

describe('RealIncomeController', () => {
  let controller: RealIncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealIncomeController],
      providers: [RealIncomeService],
    }).compile();

    controller = module.get<RealIncomeController>(RealIncomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
