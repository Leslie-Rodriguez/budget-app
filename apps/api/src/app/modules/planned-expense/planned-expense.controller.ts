import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlannedExpenseService } from './planned-expense.service';
import { CreatePlannedExpenseDto } from './dto/create-planned-expense.dto';
import { UpdatePlannedExpenseDto } from './dto/update-planned-expense.dto';
import { PlannedExpenseMapper } from './planned-expense.mapper';

@Controller('planned-expense')
export class PlannedExpenseController {
  constructor(private readonly plannedExpenseService: PlannedExpenseService) {}

  @Post()
  create(@Body() createPlannedExpenseDto: CreatePlannedExpenseDto): Promise<CreatePlannedExpenseDto> {
    return this.plannedExpenseService.insertPlannedExpense(new PlannedExpenseMapper().dtoToEntity(createPlannedExpenseDto));
  }

  @Get()
  findAll(): Promise<CreatePlannedExpenseDto[]> {
    return this.plannedExpenseService.findAll();
  }

  @Get(':plannedExpense_id')
  findOne(@Param('plannedExpense_id') id: string): Promise<CreatePlannedExpenseDto> {
    return this.plannedExpenseService.findOne(id);
  }

  @Patch(':plannedExpense_id')
  update(
    @Param('plannedExpense_id') id: string,
    @Body() updatePlannedExpenseDto: UpdatePlannedExpenseDto
  ): Promise<UpdatePlannedExpenseDto> {
    return this.plannedExpenseService.update(id, new PlannedExpenseMapper().dtoToEntity(updatePlannedExpenseDto));
  }

  @Delete(':plannedExpense_id')
  remove(@Param('plannedExpense_id') id: string) {
    return this.plannedExpenseService.remove(id);
  }
}
