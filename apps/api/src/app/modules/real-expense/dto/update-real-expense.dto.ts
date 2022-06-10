import { PartialType } from '@nestjs/mapped-types';
import { CreateRealExpenseDto } from './create-real-expense.dto';

export class UpdateRealExpenseDto extends PartialType(CreateRealExpenseDto) {}
