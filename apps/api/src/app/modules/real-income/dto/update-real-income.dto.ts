import { PartialType } from '@nestjs/mapped-types';
import { CreateRealIncomeDto } from './create-real-income.dto';

export class UpdateRealIncomeDto extends PartialType(CreateRealIncomeDto) {}
