import { Injectable } from "@nestjs/common";
import { CreatePlannedExpenseDto } from "./dto/create-planned-expense.dto";
import { UpdatePlannedExpenseDto } from "./dto/update-planned-expense.dto";
import { PlannedExpense } from "./entities/planned-expense.entity";

@Injectable()

export class PlannedExpenseMapper {
    dtoToEntity(dto: CreatePlannedExpenseDto | UpdatePlannedExpenseDto): PlannedExpense {
        return new PlannedExpense(dto.amount, dto.budget, dto.category)
    }

    entityToDto(entity: PlannedExpense): CreatePlannedExpenseDto {
        return new CreatePlannedExpenseDto(entity.amount, entity.budget, entity.category);
    }   
}