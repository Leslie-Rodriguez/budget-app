import { PartialType } from '@nestjs/mapped-types';
import { CreatePlannedIncomeDto } from './create-planned-income.dto';

export class UpdatePlannedIncomeDto extends PartialType(
  CreatePlannedIncomeDto
) {}
