import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BudgetMapper } from './budget.mapper';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto): Promise<CreateBudgetDto> {
    return this.budgetService.insertBudget(new BudgetMapper().dtoToEntity(createBudgetDto));
  }

  @Get()
  findAll(): Promise<CreateBudgetDto[]> {
    return this.budgetService.findAll();
  }

  @Get(':budget_id')
  findOne(@Param('budget_id') id: string): Promise<CreateBudgetDto> {
    return this.budgetService.findOne(id);
  }

  @Patch(':budget_id')
  update(@Param('budget_id') id: string, @Body() updateBudgetDto: UpdateBudgetDto): Promise<UpdateBudgetDto> {
    return this.budgetService.update(id, new BudgetMapper().dtoToEntity(updateBudgetDto));
  }

  @Delete(':budget_id')
  remove(@Param('budget_id') id: string) {
    return this.budgetService.remove(id);
  }
}
