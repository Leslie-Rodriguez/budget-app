import { PartialType } from '@nestjs/mapped-types';
import { CreatePlannedExpenseDto } from './create-planned-expense.dto';

export class UpdatePlannedExpenseDto extends PartialType(
  CreatePlannedExpenseDto
) {}
