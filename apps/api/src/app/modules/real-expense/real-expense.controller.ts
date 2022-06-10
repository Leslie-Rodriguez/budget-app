import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RealExpenseService } from './real-expense.service';
import { CreateRealExpenseDto } from './dto/create-real-expense.dto';
import { UpdateRealExpenseDto } from './dto/update-real-expense.dto';
import { RealExpenseMapper } from './real-expense.mapper';

@Controller('real-expense')
export class RealExpenseController {
  constructor(private readonly realExpenseService: RealExpenseService) {}

  @Post()
  create(@Body() createRealExpenseDto: CreateRealExpenseDto): Promise<CreateRealExpenseDto> {
    return this.realExpenseService.insertRealExpense(new RealExpenseMapper().dtoToEntity(createRealExpenseDto));
  }

  @Get()
  findAll(): Promise<CreateRealExpenseDto[]> {
    return this.realExpenseService.findAll();
  }

  @Get(':realExpense_id')
  findOne(@Param('realExpense_id') id: string): Promise<CreateRealExpenseDto> {
    return this.realExpenseService.findOne(id);
  }

  @Patch(':realExpense_id')
  update(
    @Param('realExpense_id') id: string,
    @Body() updateRealExpenseDto: UpdateRealExpenseDto
  ): Promise<UpdateRealExpenseDto> {
    return this.realExpenseService.update(id, new RealExpenseMapper().dtoToEntity(updateRealExpenseDto));
  }

  @Delete(':realExpense_id')
  remove(@Param('realExpense_id') id: string) {
    return this.realExpenseService.remove(id);
  }
}
