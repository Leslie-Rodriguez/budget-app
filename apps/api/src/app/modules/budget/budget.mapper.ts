import { Injectable } from "@nestjs/common";
import { CreateBudgetDto } from "./dto/create-budget.dto";
import { UpdateBudgetDto } from "./dto/update-budget.dto";
import { Budget } from "./entities/budget.entity";

@Injectable()

export class BudgetMapper {
    
    dtoToEntity(dto: CreateBudgetDto | UpdateBudgetDto): Budget {
        return new Budget(dto.init_date, dto.final_date)
    }

    entityToDto(entity: Budget): CreateBudgetDto {
        return new CreateBudgetDto(entity.init_date, entity.final_date);
    }
}

