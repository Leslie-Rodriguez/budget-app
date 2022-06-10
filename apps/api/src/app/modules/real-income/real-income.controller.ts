import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RealIncomeService } from './real-income.service';
import { CreateRealIncomeDto } from './dto/create-real-income.dto';
import { UpdateRealIncomeDto } from './dto/update-real-income.dto';
import { RealIncomeMapper } from './real-income.mapper';

@Controller('real-income')
export class RealIncomeController {
  constructor(private readonly realIncomeService: RealIncomeService) {}

  @Post()
  create(@Body() createRealIncomeDto: CreateRealIncomeDto): Promise<CreateRealIncomeDto> {
    return this.realIncomeService.insertRealIncome(new RealIncomeMapper().dtoToEntity(createRealIncomeDto));
  }

  @Get()
  findAll(): Promise<CreateRealIncomeDto[]> {
    return this.realIncomeService.findAll();
  }

  @Get(':realIncome_id')
  findOne(@Param('realIncome_id') id: string): Promise<CreateRealIncomeDto> {
    return this.realIncomeService.findOne(id);
  }

  @Patch(':realIncome_id')
  update(
    @Param('realIncome_id') id: string,
    @Body() updateRealIncomeDto: UpdateRealIncomeDto
  ): Promise<UpdateRealIncomeDto> {
    return this.realIncomeService.update(id, new RealIncomeMapper().dtoToEntity(updateRealIncomeDto));
  }

  @Delete(':realIncome_id')
  remove(@Param('realIncome_id') id: string) {
    return this.realIncomeService.remove(id);
  }
}

