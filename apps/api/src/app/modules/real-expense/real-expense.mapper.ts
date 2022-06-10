import { Injectable } from "@nestjs/common";
import { CreateRealExpenseDto } from "./dto/create-real-expense.dto";
import { UpdateRealExpenseDto } from "./dto/update-real-expense.dto";
import { RealExpense } from "./entities/real-expense.entity";

@Injectable()

export class RealExpenseMapper {
    
    dtoToEntity(dto: CreateRealExpenseDto | UpdateRealExpenseDto): RealExpense {
        return new RealExpense(dto.amount, dto.date, dto.budget, dto.category)
    }

    entityToDto(entity: RealExpense): CreateRealExpenseDto {
        return new CreateRealExpenseDto(entity.amount, entity.date, entity.budget, entity.category);
    }
}

