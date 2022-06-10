import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlannedIncomeService } from './planned-income.service';
import { CreatePlannedIncomeDto } from './dto/create-planned-income.dto';
import { UpdatePlannedIncomeDto } from './dto/update-planned-income.dto';
import { PlannedIncomeMapper } from './planned-income.mapper';

@Controller('planned-income')
export class PlannedIncomeController {
  constructor(private readonly plannedIncomeService: PlannedIncomeService) {}

  @Post()
  create(@Body() createPlannedIncomeDto: CreatePlannedIncomeDto): Promise<CreatePlannedIncomeDto> {
    return this.plannedIncomeService.insertPlannedIncome(new PlannedIncomeMapper().dtoToEntity(createPlannedIncomeDto));
  }

  @Get()
  findAll(): Promise<CreatePlannedIncomeDto[]> {
    return this.plannedIncomeService.findAll();
  }

  @Get(':plannedIncome_id')
  findOne(@Param('plannedIncome_id') id: string): Promise<CreatePlannedIncomeDto> {
    return this.plannedIncomeService.findOne(id);
  }

  @Patch(':plannedIncome_id')
  update(
    @Param('plannedIncome_id') id: string,
    @Body() updatePlannedIncomeDto: UpdatePlannedIncomeDto
  ): Promise<UpdatePlannedIncomeDto> {
    return this.plannedIncomeService.update(id, new PlannedIncomeMapper().dtoToEntity(updatePlannedIncomeDto));
  }

  @Delete(':plannedIncome_id')
  remove(@Param('plannedIncome_id') id: string) {
    return this.plannedIncomeService.remove(id);
  }
}
